<?php
use Automattic\WooCommerce\Blocks\Package;
use Automattic\WooCommerce\Blocks\StoreApi\Schemas\CartSchema;
use Automattic\WooCommerce\Blocks\StoreApi\Schemas\CheckoutSchema;

defined( 'ABSPATH' ) || exit;

/**
 * SilkyPress Input Field Block Extend Store API.
 */
class SilkyPress_Input_Field_Block_Extend_Store_Endpoint {

	/**
	 * Stores Rest Extending instance.
	 */
	private static $extend;

	/**
	 * Plugin Identifier, unique to each plugin.
	 */
	const IDENTIFIER = 'silkypress-input-field-block';

	/**
	 * Bootstrap the class and hooks required data.
	 */
	public static function init() {
		self::$extend = Automattic\WooCommerce\StoreApi\StoreApi::container()->get( Automattic\WooCommerce\StoreApi\Schemas\ExtendSchema::class );

		if ( is_callable( [ self::$extend, 'register_endpoint_data' ] ) ) {
			self::$extend->register_endpoint_data(
				[
					'endpoint'        => CheckoutSchema::IDENTIFIER,
					'namespace'       => self::IDENTIFIER,
					'schema_callback' => [ 'SilkyPress_Input_Field_Block_Extend_Store_Endpoint', 'extend_checkout_schema' ],
					'schema_type'     => ARRAY_A,
				]
			);
		}
	}

	/**
	 * Register custom inputs schema into the Checkout endpoint.
	 */
	public static function extend_checkout_schema() {

		$block = [
			'type'        => 'object',
			'context'     => [ 'view', 'edit' ],
			'readonly'    => true,
			'optional'    => true,
		];

		$inputs = get_option( 'silkypress-input-field-block', [] );

		$sections = [];
		foreach ( $inputs as $_input ) {
			$sections[ $_input['section'] ] = $block;
		}

		return $sections;
    }
}
