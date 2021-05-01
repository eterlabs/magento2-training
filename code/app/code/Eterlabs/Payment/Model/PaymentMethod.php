<?php

namespace Eterlabs\Payment\Model;

/**
 * Pay In Store payment method model
 */
class PaymentMethod extends \Magento\Payment\Model\Method\AbstractMethod
{

    /**
     * Payment Method feature
     *
     * @var bool
     */
    protected $_canAuthorize = true;

    /**
     * Payment code
     *
     * @var string
     */
    protected $_code = 'testpayment';
}
