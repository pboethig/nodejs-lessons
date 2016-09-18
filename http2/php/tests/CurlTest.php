<?php

/**
 * Testclass to test the simle webclient.
 *
 * @author Peter Böthig
 * @license MIT
 */

use PHPUnit\Framework\TestCase;

use Client\Curl;

class CurlTest extends PHPUnit\Framework\TestCase
{
    /**
     * @var Client\Curl
     */
    private $_client = null;


    public function setUp()
    {
        $this->_client = new Curl();
    }

    /**
     * Simply assert serviceresponse
     */
    public function testGet()
    {
        $expected = '{"message":"Hello Client"}';

        $response = $this->_client->get();

        $this->assertEquals($expected, $response);
    }

}