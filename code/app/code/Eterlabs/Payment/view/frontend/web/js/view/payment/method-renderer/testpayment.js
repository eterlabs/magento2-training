/**
 * @author    Eduardo Garcia <eduardo@eterlabs.com>
 * @copyright  Copyright (c) 2021 Eterlabs (https://www.eterlabs.com)
 * @link       https://www.eterlabs.com
 */
define(
    [
        'Magento_Checkout/js/view/payment/default'
    ],
    function (Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Eterlabs_Payment/payment/testpayment'
            }
        });
    }
);
