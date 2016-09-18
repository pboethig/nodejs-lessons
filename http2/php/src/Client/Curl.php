<?php
/**
 * A Simple http client to call a self signed certificated webserver
 *
 * @see etc/certs for certs and keys
 * @author Peter Böthig <pb@gmail.com>
 */

namespace Client;

class Curl
{
    /**
     * Simply call a static ssl domain
     *
     * @return string
     */
    public function get()
    {
        try {
            $url = 'https://nodejs.local:8084';
            $contextOptions = array(
                'ssl' => array(
                    /**
                     * Allow ssl verification
                     */
                    'verify_peer'   => true,
                    /**
                     * Define your local path to the self signed certificate
                     */
                    'cafile'        => '../etc/certs/server.crt',
                    'verify_depth'  => 5,
                    'disable_compression' => true,
                    'SNI_enabled'         => true,
                    'ciphers'             => 'ALL!EXPORT!EXPORT40!EXPORT56!aNULL!LOW!RC4'
                )
            );
            $sslContext = stream_context_create($contextOptions);
            $result = file_get_contents($url, NULL, $sslContext);

        } catch (\Exception $e)
        {
            throw new \InvalidArgumentException('curl request failed with:' . $e->getMessage().$e->getTraceAsString());
        }

        return $result;
    }
}