<?php

/**
 * Created by PhpStorm.
 * User: root
 * Date: 18.09.16
 * Time: 19:59
 */

use PHPUnit\Framework\TestCase;

use Client\Curl;

class CurlTest extends PHPUnit\Framework\TestCase
{

    private $_client = null;

    public function setUp()
    {
        $this->_client = new Curl();
    }


    public function testGet()
    {
        $expected = '{"message":"Hello Client"}';

        $response = $this->_client->get();

        $this->assertEquals($expected, $response);
    }

}