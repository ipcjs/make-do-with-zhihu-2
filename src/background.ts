import nav from './nav'

/** @deprecated blocking的Api在V3中用不了... */
function deprecated() {
    chrome.webRequest.onBeforeSendHeaders.addListener(
        (details) => {
            debugger
            return {
                requestHeaders: details.requestHeaders
            }
        },
        { urls: ['<all_urls>'] },
        ['blocking', 'requestHeaders'],
    )
}

const c = chrome.declarativeNetRequest

async function main() {
    await c.updateDynamicRules({
        removeRuleIds: [1],
        addRules: [
            {
                id: 1,
                priority: 1,
                condition: {
                    resourceTypes: [c.ResourceType.MAIN_FRAME],
                    urlFilter: "||zhihu.com"
                },
                action: {
                    type: c.RuleActionType.MODIFY_HEADERS,
                    requestHeaders: [
                        {
                            header: 'user-agent',
                            operation: c.HeaderOperation.SET,
                            value: nav.userAgent,
                        }
                    ],
                }
            }
        ]
    })
}

main()