/**
 * window.c.ProjectSuccessfulOnboard component
 * render first interaction of successful project onboarding
 * used when project is successful and wants to confirm bank data and request transfer
 *
 * Example:
 * m.component(c.ProjectSuccessfulOnboard, {project: project})
 **/
import m from 'mithril';
import postgrest from 'mithril-postgrest';
import I18n from 'i18n-js';
import h from '../h';
import models from '../models';
import dashboardInfo from './dashboard-info';
import projectSuccessfulOnboardConfirmAccount from './project-successful-onboard-confirm-account';
import modalBox from './modal-box';
import successfulProjectTaxModal from './successful-project-tax-modal';
import insightVM from '../vms/insight-vm';

const I18nScope = _.partial(h.i18nScope, 'projects.successful_onboard');

const projectSuccessfulOnboard = {
    controller(args) {
        const projectIdVM = postgrest.filtersVM({ project_id: 'eq' }),
            projectAccounts = m.prop([]),
            projectTransfers = m.prop([]),
            showTaxModal = h.toggleProp(false, true),
            onboardComponents = {
                start: dashboardInfo,
                confirm_account: projectSuccessfulOnboardConfirmAccount,
                error_account: dashboardInfo,
                pending_transfer: dashboardInfo,
                finished: dashboardInfo
            },
            currentState = m.prop('start'),
            currentComponent = () => onboardComponents[currentState()],
            content = () => insightVM.content(currentState(), {
                account: projectAccounts,
                transfer: projectTransfers,
                showTaxModal
            }),
            loader = postgrest.loaderWithToken,
            declineAccountLoader = (errorMsg) => {
                const pa = _.first(projectAccounts());

                return postgrest.loaderWithToken(
                      models.projectAccountError.postOptions({
                          project_id: args.project().project_id,
                          reason: errorMsg
                      }));
            },
            acceptAccountLoader = postgrest.loaderWithToken(
                  models.projectAccount.postOptions({
                      project_id: args.project().project_id
                  })
              );

        projectIdVM.project_id(args.project().project_id);

        const lProjectAccount = loader(models.projectAccount.getRowOptions(projectIdVM.parameters()));
        lProjectAccount.load().then((data) => {
            projectAccounts(data);

            loadCurrentStage();
        });

        const lProjectTransfer = loader(models.projectTransfer.getRowOptions(projectIdVM.parameters()));
        lProjectTransfer.load().then(projectTransfers);

        const setStage = (state) => {
                currentState(state);

                return currentComponent;
            },
            nextStage = () => {
                const keys = _.keys(onboardComponents),
                    nextKey = keys[_.indexOf(keys, currentState()) + 1];

                currentState(nextKey);

                return currentComponent;
            },
            loadCurrentStage = () => {
                if (!lProjectAccount()) {
                    const pa = _.first(projectAccounts());

                    if (_.isNull(pa)) {
                        return setStage('finished')();
                    }

                    if (_.isNull(pa.transfer_state)) {
                        return setStage('start')();
                    } else if (!_.isNull(pa.transfer_state)) {
                        if (pa.transfer_state == 'transferred') {
                            return setStage('finished')();
                        }
                        return setStage('pending_transfer')();
                    }
                }

                return false;
            },

            acceptAccount = () => {
                acceptAccountLoader.load().then(() => {
                    setStage('pending_transfer')();
                });

                return false;
            };

        return {
            projectAccounts,
            projectTransfers,
            lProjectAccount,
            lProjectTransfer,
            setStage,
            nextStage,
            currentComponent,
            acceptAccount,
            acceptAccountLoader,
            content,
            declineAccountLoader,
            loadCurrentStage,
            showTaxModal
        };
    },
    view(ctrl, args) {
        const projectAccount = _.first(ctrl.projectAccounts()),
            projectTransfer = _.first(ctrl.projectTransfers()),
            lpa = ctrl.lProjectAccount,
            lpt = ctrl.lProjectTransfer;

        return m('.w-section.section', [
            (ctrl.showTaxModal() ? m.component(modalBox, {
                displayModal: ctrl.showTaxModal,
                content: [successfulProjectTaxModal, {
                    projectTransfer
                }]
            }) : ''),
            (!lpa() && !lpt() ?
             m.component(ctrl.currentComponent(), {
                 projectTransfer,
                 projectAccount,
                 setStage: ctrl.setStage,
                 acceptAccount: ctrl.acceptAccount,
                 acceptAccountLoader: ctrl.acceptAccountLoader,
                 nextStage: ctrl.nextStage,
                 content: ctrl.content(),
                 dataToRedraw: {
                     tax_link: {
                         action: 'onclick',
                         actionSource: () => {
                             ctrl.showTaxModal.toggle();
                             m.redraw();
                         }
                     }
                 }
             }) : h.loader())

        ]);
    }
};

export default projectSuccessfulOnboard;
