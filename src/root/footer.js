import m from 'mithril';
import h from '../h';

const footer = {
    view() {
        return m('footer.main-footer.main-footer-neg',
            [
                m('section.w-container',
                    m('.w-row',
                        [
                            m('.w-col.w-col-9',
                                m('.w-row',
                                    [
                                        m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.w-hidden-tiny',
                                            [
                                                m('.footer-full-signature-text.fontsize-small',
                                                    'Welcome'
                                                ),
                                                m('a.link-footer[href=\'/en/start?ref=ctrse_footer\']',
                                                    ' How it works'
                                                ),
                                                m('a.link-footer[href=\'/en/flex?ref=ctrse_footer\']',
                                                    [
                                                        ' Citizen Supported flex ',
                                                        m('span.badge.badge-success',
                                                            'New'
                                                        )
                                                    ]
                                                ),
                                                m('a.link-footer[href=\'/en/team?ref=ctrse_footer\']',
                                                    [
                                                        ' Our team ',
                                                        m.trust('&lt;'),
                                                        '3'
                                                    ]
                                                ),
                                                m('a.link-footer[href=\'/en/jobs?ref=ctrse_footer\']',
                                                    [
                                                        ' Jobs ',
                                                        m('span.badge.badge-success',
                                                            'Come work with us!'
                                                        )
                                                    ]
                                                ),
                                                m('a.link-footer[href=\'http://facebook.com/citizensupported\']',
                                                    ' Facebook'
                                                ),
                                                m('a.link-footer[href=\'http://twitter.com/citizensupported\']',
                                                    ' Twitter'
                                                ),
                                                m('a.link-footer[href=\'http://instagram.com/citizensupported\']',
                                                    ' Instagram'
                                                ),
                                                m('a.link-footer[href=\'http://blog.citizensupported.org?ref=ctrse_footer\']',
                                                    ' Blog'
                                                )
                                            ]
                                        ),
                                        m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.footer-full-firstcolumn',
                                            [
                                                m('.footer-full-signature-text.fontsize-small',
                                                    'Help'
                                                ),
                                                m('a.link-footer[href=\'https://citizensupported.zendesk.com/hc/en-us/requests/new\'][target="_BLANK"]',
                                                    ' Contact'
                                                ),
                                                m('a.link-footer[href=\'https://citizensupported.zendesk.com/hc/en-us/?ref=ctrse_footer/\']',
                                                    ' Support center'
                                                ),
                                                m('a.link-footer[href=\'https://https://citizensupported.zendesk.com/hc/en-us/?ref=ctrse_footer\']',
                                                    ' Our Fees & Pricing'
                                                ),
                                                m('a.link-footer[href=\'/en/press?ref=ctrse_footer\']',
                                                    ' Press'
                                                ),
                                                m('a.link-footer[href=\'/en/terms-of-use\']',
                                                    ' Terms of use'
                                                ),
                                                m('a.link-footer[href=\'/en/privacy-policy\']',
                                                    ' Privacy policy'
                                                )
                                            ]
                                        ),
                                        m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.footer-full-lastcolumn',
                                            [
                                                m('.footer-full-signature-text.fontsize-small',
                                                    'Browse'
                                                ),
                                                m('a.w-hidden-small.w-hidden-tiny.link-footer[href=\'/en/start?ref=ctrse_footer\']',
                                                    ' Fund your activism'
                                                ),
                                                m('a.link-footer[href=\'/en/explore?ref=ctrse_footer\']',
                                                    ' Explore campaigns'
                                                ),
                                                m('a.w-hidden-main.w-hidden-medium.w-hidden-small.link-footer[href=\'http://blog.citizensupported.org?ref=ctrse_footer\']',
                                                    ' Blog'
                                                ),
                                                m('a.w-hidden-main.w-hidden-medium.w-hidden-small.link-footer[href=\'https://citizensupported.zendesk.com/hc/en-us/requests/new\']',
                                                    ' Contact'
                                                ),
                                                m('a.w-hidden-tiny.link-footer[href=\'/en/explore?filter=score&ref=ctrse_footer\']',
                                                    ' Popular'
                                                ),
                                                m('a.w-hidden-tiny.link-footer[href=\'/en/explore?filter=online&ref=ctrse_footer\']',
                                                    ' New'
                                                ),
                                                m('a.w-hidden-tiny.link-footer[href=\'/en/explore?filter=finished&ref=ctrse_footer\']',
                                                    ' Ending Soon'
                                                )
                                            ]
                                        )
                                    ]
                                )
                            ),
                            m('.w-col.w-col-3.column-social-media-footer',
                                [
                                    m('.footer-full-signature-text.fontsize-small',
                                        'Get our newsletter'
                                    ),
                                    m('.w-form',
                                        m(`form[accept-charset='UTF-8'][action='${h.getMailchimpUrl()}'][id='mailee-form'][method='post']`,
                                            [
                                                m('.w-form.footer-newsletter',
                                                    m('input.w-input.text-field.prefix[id=\'EMAIL\'][label=\'email\'][name=\'EMAIL\'][placeholder=\'Type your email\'][type=\'email\']')
                                                ),
                                                m('button.w-inline-block.btn.btn-edit.postfix.btn-attached[style="padding:0;"]',
                                                    m('img.footer-news-icon[alt=\'Icon newsletter\'][src=\'/assets/catarse_bootstrap/icon-newsletter.png\']')
                                                )
                                            ]
                                        )
                                    ),
                                    m('.footer-full-signature-text.fontsize-small',
                                        'Change language'
                                    ),
                                    m('[id=\'google_translate_element\']')
                                ]
                            )
                        ]
                    )
                ),
                m('.w-container',
                    m('.footer-full-copyleft',
                        [
                            m('img.u-marginbottom-20[alt=\'Logo footer\'][src=\'/assets/logo-footer.png\']'),
                            m('.lineheight-loose',
                                m('a.link-footer-inline[href=\'http://github.com/citizensupported/citizensupported\']',
                                   ` Made with love | ${new Date().getFullYear()} | Open source`
                                )
                            )
                        ]
                    )
                )
            ]
        );
    }
};

export default footer;
