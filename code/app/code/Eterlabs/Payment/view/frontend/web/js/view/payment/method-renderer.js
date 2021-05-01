/**
 * @author    Eduardo Garcia <eduardo@eterlabs.com>
 * @copyright  Copyright (c) 2021 Eterlabs (https://www.eterlabs.com)
 * @link       https://www.eterlabs.com
 */
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'testpayment',
                component: 'Eterlabs_Payment/js/view/payment/method-renderer/testpayment'
            }
        );
        return Component.extend({});
    }
);
