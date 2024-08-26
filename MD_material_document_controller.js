


//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_MDH_material_document_header = 
[
    {
        tenant : '',
        material_document : '',
        fiscal_year : '',

        material_document_type : '',
        document_date : '',
        posting_date : '',
        header_reference : '',
        header_text : '',
        material_document_reverse : '',
        fiscal_year_reverse : '',        
        system_field_message_type : '',
        system_field_message_description : ''
    }
];

var tt_MDH_input_material_document_header = structuredClone(tt_MDH_material_document_header),
    tt_MDH_output_material_document_header = structuredClone(tt_MDH_material_document_header);


//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_MDI_material_document_item = 
[
    {
        tenant : '',
        material_document : '',
        fiscal_year : '',
        item : '',

        material : '',
        plant : '',
        storage_location : '',
        quantity : '',
        entry_UOM : '',
        material_movement_type : '',
        item_text : '',
        purchase_order : '',
        purchase_order_item : '',
        sales_order : '',
        sales_order_item : '',
        unrestricted_stock_before_post : '',
        restricted_stock_before_post : '',
        reserved_stock_before_post : '',
        blocked_stock_before_post : '',
        quality_in_stock_before_post : '',
        purchase_order_goods_receipt_quantity_before_post : '',
        sales_order_goods_issue_quantity_before_post : '',
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
    }
];

var tt_MDI_input_material_document_item = structuredClone(tt_MDI_material_document_item),
    tt_MDI_output_material_document_item = structuredClone(tt_MDI_material_document_item);


//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_MSL_material_storage_location = 
    [
        {
            tenant : '',
            material : '',
            plant : '',
            storage_location : '',

            storage_bin : '',
            unrestricted_stock : '',
            restricted_stock : '',
            reserved_stock : '',
            blocked_stock : '',
            quality_in_stock : '',
            last_material_document : '',
            last_fiscal_year : '',
            last_item : '',
            system_field_message_type : '',
            system_field_message_description : ''
        }
    ];

    var tt_MSL_input_material_storage_location = structuredClone(tt_MSL_material_storage_location),
        tt_MSL_output_material_storage_location = structuredClone(tt_MSL_material_storage_location),
        tt_MSL_output_material_storage_location_copy = structuredClone(tt_MSL_material_storage_location);


//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_MMT_material_movement_type = 
    [
        {
            tenant : '',
            material_movement_type : '',
            
            material_movement_type_description : '',
            material_movement_type_reverse : '',
            system_field_message_type : '',
            system_field_message_description : ''
        }
    ];

    var tt_MMT_input_material_movement_type = structuredClone(tt_MMT_material_movement_type),
        tt_MMT_output_material_movement_type = structuredClone(tt_MMT_material_movement_type);



//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_POI_purchase_order_header = 
    [
        {
            tenant : '',
            purchase_order : '',
            
            vendor : '',
        }
    ];

var tt_POI_input_purchase_order_header = structuredClone(tt_POI_purchase_order_header),    
    tt_POI_output_purchase_order_header = structuredClone(tt_POI_purchase_order_header);


//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_POI_purchase_order_item = 
    [
        {
            tenant : '',
            purchase_order : '',
            item : '',
            
            material : '',
            plant : '',
            storage_location : '',
            purchase_order_quantity : '',
            purchase_UOM : '',
            goods_receipt_quantity : ''
        }
    ];


    var tt_POI_input_purchase_order_item = structuredClone(tt_POI_purchase_order_item),    
    tt_POI_output_purchase_order_item = structuredClone(tt_POI_purchase_order_item);



//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_SOI_sales_order_header = 
    [
        {
            tenant : '',
            sales_order : '',
            
            customer : '',
        }
    ];

var tt_SOI_input_sales_order_header = structuredClone(tt_SOI_sales_order_header),    
    tt_SOI_output_sales_order_header = structuredClone(tt_SOI_sales_order_header);



//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tt_SOI_sales_order_item = 
    [
        {
            tenant : '',
            sales_order : '',
            item : '',
            
            material : '',
            plant : '',
            storage_location : '',
            sales_order_quantity : '',
            sales_UOM : '',
            goods_issue_quantity : ''
        }
    ];

    var tt_SOI_input_sales_order_item = structuredClone(tt_SOI_sales_order_item),    
    tt_SOI_output_sales_order_item = structuredClone(tt_SOI_sales_order_item);

    
//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MD_create_controller()
{
    var lt_MDH_input_material_document_header = {},
        lt_MDH_output_material_document_header = {},
        lt_MDI_input_material_document_item = {},
        lt_MDI_output_material_document_item = {},
        lt_MSL_output_material_storage_location = {},
        lt_POI_output_purchase_order_item = {},
        lt_SOI_output_sales_order_item = {}

    var lo_MD_material_document = new MD_material_document();

    MD_set_field_property_C();
    [lt_MDH_input_material_document_header, lt_MDI_input_material_document_item] = MD_copy_screen_input_C();
    [lt_MDH_output_material_document_header, lt_MDI_output_material_document_item, lt_MSL_output_material_storage_location, lt_POI_output_purchase_order_item, lt_SOI_output_sales_order_item] = lo_MD_material_document.MD_create_model(lt_MDH_input_material_document_header, lt_MDI_input_material_document_item);
    MD_copy_output_screen_C(lt_MDH_output_material_document_header, lt_MDI_output_material_document_item); 

}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MD_read_controller()
{
    var lt_MDH_input_material_document_header = {},
        lt_MDH_output_material_document_header = {},
        lt_MDI_input_material_document_item = {},
        lt_MDI_output_material_document_item = {};

    var lo_MD_material_document = new MD_material_document();

    MD_set_field_property_R();
    [lt_MDH_input_material_document_header, lt_MDI_input_material_document_item] = MD_copy_screen_input_R();
    [lt_MDH_output_material_document_header, lt_MDI_output_material_document_item] = lo_MD_material_document.MD_read_model(lt_MDH_input_material_document_header, lt_MDI_input_material_document_item);
    MD_copy_output_screen_C(lt_MDH_output_material_document_header, lt_MDI_output_material_document_item); 
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MD_update_controller()
{
    var lt_MDH_input_material_document_header = {},
        lt_MDH_output_material_document_header = {},
        lt_MDI_input_material_document_item = {},
        lt_MDI_output_material_document_item = {};

    var lo_MD_material_document = new MD_material_document();

    MD_set_field_property_U();
    [lt_MDH_input_material_document_header, lt_MDI_input_material_document_item] = MD_copy_screen_input_U();
    [lt_MDH_output_material_document_header, lt_MDI_output_material_document_item] = lo_MD_material_document.MD_update_model(lt_MDH_input_material_document_header, lt_MDI_input_material_document_item);
    MD_copy_output_screen_U(lt_MDH_output_material_document_header, lt_MDI_output_material_document_item);    
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MD_delete_controller()
{
    var lt_MDH_input_material_document_header = {},
        lt_MDH_output_material_document_header = {},
        lt_MDI_input_material_document_item = {},
        lt_MDI_output_material_document_item = {},
        lt_MSL_output_material_storage_location = {},
        lt_POI_output_purchase_order_item = {},
        lt_SOI_output_sales_order_item = {};
            
    var lo_MD_material_document = new MD_material_document();

    MD_set_field_property_D();
    [lt_MDH_input_material_document_header, lt_MDI_input_material_document_item] = MD_copy_screen_input_D();
    [lt_MDH_output_material_document_header, lt_MDI_output_material_document_item, lt_MSL_output_material_storage_location, lt_POI_output_purchase_order_item, lt_SOI_output_sales_order_item] = lo_MD_material_document.MD_delete_model(lt_MDH_input_material_document_header, lt_MDI_input_material_document_item);
    MD_copy_output_screen_D(lt_MDH_output_material_document_header, lt_MDI_output_material_document_item);   
}