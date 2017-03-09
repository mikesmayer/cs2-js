import m from 'mithril';
import h from '../h';

const popNotification = {
    controller(args) {
        return {
            displayNotification: args.toggleOpt || h.toggleProp(true, false)
        };
    },
    view(ctrl, args) {
        return (ctrl.displayNotification() ? m('.flash.w-clearfix.card.card-notification.u-radius.zindex-20', {
            class: args.error ? 'card-error' : ''
        }, [
            m('img.icon-close[src="/assets/catarse_bootstrap/x.png"][width="12"][alt="fechar"]', {
                onclick: ctrl.displayNotification.toggle
            }),
            m('.fontsize-small', args.message)
        ]) : m('span'));
    }
};

export default popNotification;
