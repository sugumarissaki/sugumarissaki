


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MD_create_controller()
{
    var lt_MDH_input_material_document_header = structuredClone(tt_MDH_input_material_document_header),
        lt_MDI_input_material_document_item = structuredClone(tt_MDI_input_material_document_item);

    var lt_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header),
        lt_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item),
        lt_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),
        lt_POI_output_purchase_order_item = structuredClone(tt_POI_output_purchase_order_item),
        lt_SOI_output_sales_order_item = structuredClone(lt_SOI_output_sales_order_item);

    var lt_MDH_output_material_document_header_log = structuredClone(tt_MDH_output_material_document_header_log),
        lt_MDI_output_material_document_item_log = structuredClone(tt_MDI_output_material_document_item_log);
        
    var lo_MD_material_document = new MD_material_document();

    MD_set_field_property_C();
    [lt_MDH_input_material_document_header, lt_MDI_input_material_document_item] = MD_copy_screen_input_C();
    [lt_MDH_output_material_document_header, lt_MDI_output_material_document_item, lt_MSL_output_material_storage_location, lt_POI_output_purchase_order_item, lt_SOI_output_sales_order_item, lt_MDH_output_material_document_header_log, lt_MDI_output_material_document_item_log] = lo_MD_material_document.MD_create_model(lt_MDH_input_material_document_header, lt_MDI_input_material_document_item);
    MD_copy_output_screen_C(lt_MDH_output_material_document_header, lt_MDI_output_material_document_item); 

}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MD_read_controller()
{
    var lt_MDH_input_material_document_header = structuredClone(tt_MDH_input_material_document_header),
        lt_MDI_input_material_document_item = structuredClone(tt_MDI_input_material_document_item);

    var lt_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header),
        lt_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item);

    var lt_MDH_output_material_document_header_log = structuredClone(tt_MDH_output_material_document_header_log),
        lt_MDI_output_material_document_item_log = structuredClone(tt_MDI_output_material_document_item_log);

    var lo_MD_material_document = new MD_material_document();

    MD_set_field_property_R();
    [lt_MDH_input_material_document_header, lt_MDI_input_material_document_item] = MD_copy_screen_input_R();
    [lt_MDH_output_material_document_header, lt_MDI_output_material_document_item, lt_MDH_output_material_document_header_log, lt_MDI_output_material_document_item_log] = lo_MD_material_document.MD_read_model(lt_MDH_input_material_document_header, lt_MDI_input_material_document_item);
    MD_copy_output_screen_C(lt_MDH_output_material_document_header, lt_MDI_output_material_document_item); 
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MD_update_controller()
{
    var lt_MDH_input_material_document_header = structuredClone(tt_MDH_input_material_document_header),
        lt_MDI_input_material_document_item = structuredClone(tt_MDI_input_material_document_item);

    var lt_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header),
        lt_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item);

    var lt_MDH_output_material_document_header_log = structuredClone(tt_MDH_output_material_document_header_log),
        lt_MDI_output_material_document_item_log = structuredClone(tt_MDI_output_material_document_item_log);

    var lo_MD_material_document = new MD_material_document();

    MD_set_field_property_U();
    [lt_MDH_input_material_document_header, lt_MDI_input_material_document_item] = MD_copy_screen_input_U();
    [lt_MDH_output_material_document_header, lt_MDI_output_material_document_item, lt_MDH_output_material_document_header_log, lt_MDI_output_material_document_item_log] = lo_MD_material_document.MD_update_model(lt_MDH_input_material_document_header, lt_MDI_input_material_document_item);
    MD_copy_output_screen_U(lt_MDH_output_material_document_header, lt_MDI_output_material_document_item);    
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MD_delete_controller()
{
    var lt_MDH_input_material_document_header = structuredClone(tt_MDH_input_material_document_header),
        lt_MDI_input_material_document_item = structuredClone(tt_MDI_input_material_document_item);

    var lt_MDH_output_material_document_header = structuredClone(tt_MDH_output_material_document_header),
        lt_MDI_output_material_document_item = structuredClone(tt_MDI_output_material_document_item),
        lt_MSL_output_material_storage_location = structuredClone(tt_MSL_output_material_storage_location),
        lt_POI_output_purchase_order_item = structuredClone(tt_POI_output_purchase_order_item),
        lt_SOI_output_sales_order_item = structuredClone(lt_SOI_output_sales_order_item);

    var lt_MDH_output_material_document_header_log = structuredClone(tt_MDH_output_material_document_header_log),
        lt_MDI_output_material_document_item_log = structuredClone(tt_MDI_output_material_document_item_log);
            
    var lo_MD_material_document = new MD_material_document();

    MD_set_field_property_D();
    [lt_MDH_input_material_document_header, lt_MDI_input_material_document_item] = MD_copy_screen_input_D();
    [lt_MDH_output_material_document_header, lt_MDI_output_material_document_item, lt_MSL_output_material_storage_location, lt_POI_output_purchase_order_item, lt_SOI_output_sales_order_item, lt_MDH_output_material_document_header_log, lt_MDI_output_material_document_item_log] = lo_MD_material_document.MD_delete_model(lt_MDH_input_material_document_header, lt_MDI_input_material_document_item);
    MD_copy_output_screen_D(lt_MDH_output_material_document_header, lt_MDI_output_material_document_item);   
}