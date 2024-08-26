

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
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_set_material_document_header_hide()
{
    document.getElementById('t_MDH_material_document_header').style.display = "none";
    document.getElementById('b_MDH_set_material_document_header_hide').disabled = true;
    document.getElementById('b_MDH_set_material_document_header_unhide').disabled = false;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_set_material_document_header_unhide()
{
    document.getElementById('t_MDH_material_document_header').style.display = "table";
    document.getElementById('b_MDH_set_material_document_header_hide').disabled = false;
    document.getElementById('b_MDH_set_material_document_header_unhide').disabled = true;
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_set_material_document_item_hide()
{
    document.getElementById('t_MDI_material_docuemnt_item').style.display = "none";
    document.getElementById('b_MDI_set_material_docuemnt_item_hide').disabled = true;
    document.getElementById('b_MDI_set_material_docuemnt_item_unhide').disabled = false;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_set_material_document_item_unhide()
{
    document.getElementById('t_MDI_material_docuemnt_item').style.display = "table";
    document.getElementById('b_MDI_set_material_docuemnt_item_hide').disabled = false;
    document.getElementById('b_MDI_set_material_docuemnt_item_unhide').disabled = true;
}


//----------------------------------------------------------------------------//
// Version 20240700
//----------------------------------------------------------------------------//
function MD_set_field_property_C()
{
    var b_MD_set_field_property_C = document.getElementById("b_MD_set_field_property_C");
    b_MD_set_field_property_C.disabled = true;
    var b_MD_set_field_property_R = document.getElementById("b_MD_set_field_property_R");
    b_MD_set_field_property_R.disabled = false;
    var b_MD_set_field_property_U = document.getElementById("b_MD_set_field_property_U");
    b_MD_set_field_property_U.disabled = false;
    var b_MD_set_field_property_D = document.getElementById("b_MD_set_field_property_D");
    b_MD_set_field_property_D.disabled = false;    

    MDH_set_field_property_C();
    MDI_set_field_property_C();
    
    var b_MD_create_controller = document.getElementById("b_MD_create_controller");
    b_MD_create_controller.disabled = false; 
    var b_MD_read_controller = document.getElementById("b_MD_read_controller");
    b_MD_read_controller.disabled = true; 
    var b_MD_update_controller = document.getElementById("b_MD_update_controller");
    b_MD_update_controller.disabled = true; 
    var b_MD_delete_controller = document.getElementById("b_MD_delete_controller");
    b_MD_delete_controller.disabled = true;                    
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_screen_input_C()
{
    var ot_MDH_input_material_document_header = structuredClone(tt_MDH_input_material_document_header),
        ot_MDI_input_material_document_item = structuredClone(tt_MDI_input_material_document_item);

    lv_tenant = document.getElementById('MD_tenant').value;

    ot_MDH_input_material_document_header = MDH_copy_screen_input_C(lv_tenant);
    ot_MDI_input_material_document_item = MDI_copy_screen_input_C(lv_tenant);

    return [ot_MDH_input_material_document_header, ot_MDI_input_material_document_item];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_output_screen_C(it_MDH_output_material_document_header, it_MDI_output_material_document_item)
{
    MDH_copy_output_screen_C(it_MDH_output_material_document_header);
    MDI_copy_output_screen_C(it_MDI_output_material_document_item);
}


//----------------------------------------------------------------------------//
// Version 20240700
//----------------------------------------------------------------------------//
function MD_set_field_property_R()
{
    var b_MD_set_field_property_C = document.getElementById("b_MD_set_field_property_C");
    b_MD_set_field_property_C.disabled = false;
    var b_MD_set_field_property_R = document.getElementById("b_MD_set_field_property_R");
    b_MD_set_field_property_R.disabled = true;
    var b_MD_set_field_property_U = document.getElementById("b_MD_set_field_property_U");
    b_MD_set_field_property_U.disabled = false;
    var b_MD_set_field_property_D = document.getElementById("b_MD_set_field_property_D");
    b_MD_set_field_property_D.disabled = false;    

    MDH_set_field_property_R();
    MDI_set_field_property_R();
    
    var b_MD_create_controller = document.getElementById("b_MD_create_controller");
    b_MD_create_controller.disabled = true; 
    var b_MD_read_controller = document.getElementById("b_MD_read_controller");
    b_MD_read_controller.disabled = false; 
    var b_MD_update_controller = document.getElementById("b_MD_update_controller");
    b_MD_update_controller.disabled = true; 
    var b_MD_delete_controller = document.getElementById("b_MD_delete_controller");
    b_MD_delete_controller.disabled = true;                    
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_screen_input_R()
{
    var ot_MDH_input_material_document_header = structuredClone(tt_MDH_input_material_document_header),
        ot_MDI_input_material_document_item = structuredClone(tt_MDI_input_material_document_item);

    lv_tenant = document.getElementById('MD_tenant').value;

    ot_MDH_input_material_document_header = MDH_copy_screen_input_R(lv_tenant);
    ot_MDI_input_material_document_item = MDI_copy_screen_input_R(lv_tenant);

    return [ot_MDH_input_material_document_header, ot_MDI_input_material_document_item];    
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_output_screen_R(it_MDH_output_material_document_header, it_MDI_output_material_document_item)
{
    MDH_copy_output_screen_R(it_MDH_output_material_document_header);
    MDI_copy_output_screen_R(it_MDI_output_material_document_item);
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_set_field_property_U()
{
    var b_MD_set_field_property_C = document.getElementById("b_MD_set_field_property_C");
    b_MD_set_field_property_C.disabled = false;
    var b_MD_set_field_property_R = document.getElementById("b_MD_set_field_property_R");
    b_MD_set_field_property_R.disabled = false;
    var b_MD_set_field_property_U = document.getElementById("b_MD_set_field_property_U");
    b_MD_set_field_property_U.disabled = true;
    var b_MD_set_field_property_D = document.getElementById("b_MD_set_field_property_D");
    b_MD_set_field_property_D.disabled = false;    

    MDH_set_field_property_U();
    MDI_set_field_property_U();
    
    var b_MD_create_controller = document.getElementById("b_MD_create_controller");
    b_MD_create_controller.disabled = true; 
    var b_MD_read_controller = document.getElementById("b_MD_read_controller");
    b_MD_read_controller.disabled = true; 
    var b_MD_update_controller = document.getElementById("b_MD_update_controller");
    b_MD_update_controller.disabled = false; 
    var b_MD_delete_controller = document.getElementById("b_MD_delete_controller");
    b_MD_delete_controller.disabled = true;                    
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_screen_input_U()
{
    var ot_MDH_input_material_document_header = structuredClone(tt_MDH_input_material_document_header),
        ot_MDI_input_material_document_item = structuredClone(tt_MDI_input_material_document_item);

    lv_tenant = document.getElementById('MD_tenant').value;

    ot_MDH_input_material_document_header = MDH_copy_screen_input_U(lv_tenant);
    ot_MDI_input_material_document_item = MDI_copy_screen_input_U(lv_tenant);

    return [ot_MDH_input_material_document_header, ot_MDI_input_material_document_item];
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_output_screen_U(it_MDH_output_material_document_header, it_MDI_output_material_document_item)
{
    MDH_copy_output_screen_U(it_MDH_output_material_document_header);
    MDI_copy_output_screen_U(it_MDI_output_material_document_item);
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_set_field_property_D()
{
    var b_MD_set_field_property_C = document.getElementById("b_MD_set_field_property_C");
    b_MD_set_field_property_C.disabled = false;
    var b_MD_set_field_property_R = document.getElementById("b_MD_set_field_property_R");
    b_MD_set_field_property_R.disabled = false;
    var b_MD_set_field_property_U = document.getElementById("b_MD_set_field_property_U");
    b_MD_set_field_property_U.disabled = false;
    var b_MD_set_field_property_D = document.getElementById("b_MD_set_field_property_D");
    b_MD_set_field_property_D.disabled = true;    

    MDH_set_field_property_D();
    MDI_set_field_property_D();
    
    var b_MD_create_controller = document.getElementById("b_MD_create_controller");
    b_MD_create_controller.disabled = true; 
    var b_MD_read_controller = document.getElementById("b_MD_read_controller");
    b_MD_read_controller.disabled = true; 
    var b_MD_update_controller = document.getElementById("b_MD_update_controller");
    b_MD_update_controller.disabled = true; 
    var b_MD_delete_controller = document.getElementById("b_MD_delete_controller");
    b_MD_delete_controller.disabled = false;                    
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_screen_input_D()
{
    var ot_MDH_input_material_document_header = structuredClone(tt_MDH_input_material_document_header),
        ot_MDI_input_material_document_item = structuredClone(tt_MDI_input_material_document_item);

    lv_tenant = document.getElementById('MD_tenant').value;

    ot_MDH_input_material_document_header = MDH_copy_screen_input_D(lv_tenant);
    ot_MDI_input_material_document_item = MDI_copy_screen_input_D(lv_tenant);

    return [ot_MDH_input_material_document_header, ot_MDI_input_material_document_item]; 
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_copy_output_screen_D(it_MDH_output_material_document_header, it_MDI_output_material_document_item)
{
    MDH_copy_output_screen_D(it_MDH_output_material_document_header);
    MDI_copy_output_screen_D(it_MDI_output_material_document_item);
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_set_field_property_C()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 2; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MDH_material_document' + lv_counter;
        var MDH_material_document = document.getElementById(lv_field_name);
        MDH_material_document.disabled = false;

        lv_field_name = 'MDH_fiscal_year' + lv_counter;
        var MDH_fiscal_year = document.getElementById(lv_field_name);
        MDH_fiscal_year.disabled = false;

        lv_field_name = 'MDH_material_document_type' + lv_counter;
        var MDH_material_document_type = document.getElementById(lv_field_name);
        MDH_material_document_type.disabled = false;        

        lv_field_name = 'MDH_document_date' + lv_counter;        
        var MDH_document_date = document.getElementById(lv_field_name);
        MDH_document_date.disabled = false;

        lv_field_name = 'MDH_posting_date' + lv_counter;        
        var MDH_posting_date = document.getElementById(lv_field_name);
        MDH_posting_date.disabled = false; 
        
        lv_field_name = 'MDH_header_reference' + lv_counter;        
        var MDH_header_reference = document.getElementById(lv_field_name);
        MDH_header_reference.disabled = false;  
        
        lv_field_name = 'MDH_header_text' + lv_counter;        
        var MDH_header_text = document.getElementById(lv_field_name);
        MDH_header_text.disabled = false;  
        
        lv_field_name = 'MDH_material_document_reverse' + lv_counter;        
        var MDH_material_document_reverse = document.getElementById(lv_field_name);
        MDH_material_document_reverse.disabled = true;  
        
        lv_field_name = 'MDH_fiscal_year_reverse' + lv_counter;        
        var MDH_fiscal_year_reverse = document.getElementById(lv_field_name);
        MDH_fiscal_year_reverse.disabled = true;          
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_set_field_property_C()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MDI_material_document' + lv_counter;
        var MDI_material_document = document.getElementById(lv_field_name);
        MDI_material_document.disabled = false;

        lv_field_name = 'MDI_fiscal_year' + lv_counter;
        var MDI_fiscal_year = document.getElementById(lv_field_name);
        MDI_fiscal_year.disabled = false;

        lv_field_name = 'MDI_item' + lv_counter;
        var MDI_item = document.getElementById(lv_field_name);
        MDI_item.disabled = false;        

        lv_field_name = 'MDI_material' + lv_counter;        
        var MDI_material = document.getElementById(lv_field_name);
        MDI_material.disabled = false;

        lv_field_name = 'MDI_plant' + lv_counter;        
        var MDI_plant = document.getElementById(lv_field_name);
        MDI_plant.disabled = false; 
        
        lv_field_name = 'MDI_storage_location' + lv_counter;        
        var MDI_storage_location = document.getElementById(lv_field_name);
        MDI_storage_location.disabled = false;  
        
        lv_field_name = 'MDI_quantity' + lv_counter;        
        var MDI_quantity = document.getElementById(lv_field_name);
        MDI_quantity.disabled = false;  

        lv_field_name = 'MDI_entry_UOM' + lv_counter;        
        var MDI_entry_UOM = document.getElementById(lv_field_name);
        MDI_entry_UOM.disabled = false;  
        
        lv_field_name = 'MDI_material_movement_type' + lv_counter;        
        var MDI_material_movement_type = document.getElementById(lv_field_name);
        MDI_material_movement_type.disabled = false;  
        
        lv_field_name = 'MDI_item_text' + lv_counter;        
        var MDI_item_text = document.getElementById(lv_field_name);
        MDI_item_text.disabled = false;          

        lv_field_name = 'MDI_purchase_order' + lv_counter;        
        var MDI_purchase_order = document.getElementById(lv_field_name);
        MDI_purchase_order.disabled = false;  

        lv_field_name = 'MDI_purchase_order_item' + lv_counter;        
        var MDI_purchase_order_item = document.getElementById(lv_field_name);
        MDI_purchase_order_item.disabled = false;  

        lv_field_name = 'MDI_sales_order' + lv_counter;        
        var MDI_sales_order = document.getElementById(lv_field_name);
        MDI_sales_order.disabled = false;  

        lv_field_name = 'MDI_sales_order_item' + lv_counter;        
        var MDI_sales_order_item = document.getElementById(lv_field_name);
        MDI_sales_order_item.disabled = false;  

        lv_field_name = 'MDI_material_document_reverse' + lv_counter;        
        var MDI_material_document_reverse = document.getElementById(lv_field_name);
        MDI_material_document_reverse.disabled = true;  
        
        lv_field_name = 'MDI_fiscal_year_reverse' + lv_counter;        
        var MDI_fiscal_year_reverse = document.getElementById(lv_field_name);
        MDI_fiscal_year_reverse.disabled = true;
        
        lv_field_name = 'MDI_item_reverse' + lv_counter;        
        var MDI_item_reverse = document.getElementById(lv_field_name);
        MDI_item_reverse.disabled = true;         
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_set_field_property_R()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 2; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MDH_material_document' + lv_counter;
        var MDH_material_document = document.getElementById(lv_field_name);
        MDH_material_document.disabled = false;

        lv_field_name = 'MDH_fiscal_year' + lv_counter;
        var MDH_fiscal_year = document.getElementById(lv_field_name);
        MDH_fiscal_year.disabled = false;

        lv_field_name = 'MDH_material_document_type' + lv_counter;
        var MDH_material_document_type = document.getElementById(lv_field_name);
        MDH_material_document_type.disabled = true;        

        lv_field_name = 'MDH_document_date' + lv_counter;        
        var MDH_document_date = document.getElementById(lv_field_name);
        MDH_document_date.disabled = true;

        lv_field_name = 'MDH_posting_date' + lv_counter;        
        var MDH_posting_date = document.getElementById(lv_field_name);
        MDH_posting_date.disabled = true; 
        
        lv_field_name = 'MDH_header_reference' + lv_counter;        
        var MDH_header_reference = document.getElementById(lv_field_name);
        MDH_header_reference.disabled = true;  
        
        lv_field_name = 'MDH_header_text' + lv_counter;        
        var MDH_header_text = document.getElementById(lv_field_name);
        MDH_header_text.disabled = true;  
        
        lv_field_name = 'MDH_material_document_reverse' + lv_counter;        
        var MDH_material_document_reverse = document.getElementById(lv_field_name);
        MDH_material_document_reverse.disabled = true;  
        
        lv_field_name = 'MDH_fiscal_year_reverse' + lv_counter;        
        var MDH_fiscal_year_reverse = document.getElementById(lv_field_name);
        MDH_fiscal_year_reverse.disabled = true;          
    }
}    
   

//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_set_field_property_R()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MDI_material_document' + lv_counter;
        var MDI_material_document = document.getElementById(lv_field_name);
        MDI_material_document.disabled = false;

        lv_field_name = 'MDI_fiscal_year' + lv_counter;
        var MDI_fiscal_year = document.getElementById(lv_field_name);
        MDI_fiscal_year.disabled = false;

        lv_field_name = 'MDI_item' + lv_counter;
        var MDI_item = document.getElementById(lv_field_name);
        MDI_item.disabled = false;        

        lv_field_name = 'MDI_material' + lv_counter;        
        var MDI_material = document.getElementById(lv_field_name);
        MDI_material.disabled = true;

        lv_field_name = 'MDI_plant' + lv_counter;        
        var MDI_plant = document.getElementById(lv_field_name);
        MDI_plant.disabled = true; 
        
        lv_field_name = 'MDI_storage_location' + lv_counter;        
        var MDI_storage_location = document.getElementById(lv_field_name);
        MDI_storage_location.disabled = true;  
        
        lv_field_name = 'MDI_quantity' + lv_counter;        
        var MDI_quantity = document.getElementById(lv_field_name);
        MDI_quantity.disabled = true;  

        lv_field_name = 'MDI_entry_UOM' + lv_counter;        
        var MDI_entry_UOM = document.getElementById(lv_field_name);
        MDI_entry_UOM.disabled = true;  
        
        lv_field_name = 'MDI_material_movement_type' + lv_counter;        
        var MDI_material_movement_type = document.getElementById(lv_field_name);
        MDI_material_movement_type.disabled = true;  
        
        lv_field_name = 'MDI_item_text' + lv_counter;        
        var MDI_item_text = document.getElementById(lv_field_name);
        MDI_item_text.disabled = true;          

        lv_field_name = 'MDI_purchase_order' + lv_counter;        
        var MDI_purchase_order = document.getElementById(lv_field_name);
        MDI_purchase_order.disabled = true;  

        lv_field_name = 'MDI_purchase_order_item' + lv_counter;        
        var MDI_purchase_order_item = document.getElementById(lv_field_name);
        MDI_purchase_order_item.disabled = true;  

        lv_field_name = 'MDI_sales_order' + lv_counter;        
        var MDI_sales_order = document.getElementById(lv_field_name);
        MDI_sales_order.disabled = true;  

        lv_field_name = 'MDI_sales_order_item' + lv_counter;        
        var MDI_sales_order_item = document.getElementById(lv_field_name);
        MDI_sales_order_item.disabled = true;          

        lv_field_name = 'MDI_material_document_reverse' + lv_counter;        
        var MDI_material_document_reverse = document.getElementById(lv_field_name);
        MDI_material_document_reverse.disabled = true;  
        
        lv_field_name = 'MDI_fiscal_year_reverse' + lv_counter;        
        var MDI_fiscal_year_reverse = document.getElementById(lv_field_name);
        MDI_fiscal_year_reverse.disabled = true;
        
        lv_field_name = 'MDI_item_reverse' + lv_counter;        
        var MDI_item_reverse = document.getElementById(lv_field_name);
        MDI_item_reverse.disabled = true;         
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MDH_copy_screen_input_R(iv_tenant)
{
    var ot_MDH_input_material_document_header = structuredClone(tt_MDH_input_material_document_header);

    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_material_document_type = '',
        lv_field_name_document_date = '',
        lv_field_name_posting_date = '',
        lv_field_name_header_reference = '',
        lv_field_name_header_text = '',
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '';

    for (lv_counter = 0; lv_counter < 2; lv_counter = lv_counter + 1)
    {
        lv_field_name_material_document = 'MDH_material_document' + (lv_counter + 1);
        lv_field_name_fiscal_year = 'MDH_fiscal_year' + (lv_counter + 1);
        lv_field_name_material_document_type = 'MDH_material_document_type' + (lv_counter + 1);
        lv_field_name_document_date = 'MDH_document_date' + (lv_counter + 1);
        lv_field_name_posting_date = 'MDH_posting_date' + (lv_counter + 1);
        lv_field_name_header_reference = 'MDH_header_reference' + (lv_counter + 1);
        lv_field_name_header_text = 'MDH_header_text' + (lv_counter + 1);
        lv_field_name_material_document_reverse = 'MDH_material_document_reverse' + (lv_counter + 1);
        lv_field_name_fiscal_year_reverse = 'MDH_fiscal_year_reverse' + (lv_counter + 1);        

        lv_material_document = document.getElementById(lv_field_name_material_document).value;
        if ( lv_material_document != '')
        {
            ot_MDH_input_material_document_header[lv_counter] =
            {
            tenant : iv_tenant,
            material_document : document.getElementById(lv_field_name_material_document).value,
            fiscal_year : document.getElementById(lv_field_name_fiscal_year).value,
            material_document_type : '',
            document_date : '',
            posting_date : '',
            header_reference : '',
            header_text : '',
            material_document_reverse : '',
            fiscal_year_reverse : '',
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MDH_input_material_document_header;   
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240800
//--------------------------------------------------------------------------------------------------------------------//
function MDI_copy_screen_input_R(iv_tenant)
{
    var ot_MDI_input_material_document_item = structuredClone(tt_MDI_input_material_document_item);

    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_item = '',
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_storage_location = '',
        lv_field_name_quantity = '',
        lv_field_name_entry_UOM = '',
        lv_field_name_material_movement_type = '',
        lv_field_name_item_text = '',
        lv_field_name_purchase_order = '',
        lv_field_name_purchase_order_item = '',
        lv_field_name_sales_order = '',
        lv_field_name_sales_order_item = '',        
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '',
        lv_field_name_item_reverse = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material_document = 'MDI_material_document' + (lv_counter + 1);
        lv_field_name_fiscal_year = 'MDI_fiscal_year' + (lv_counter + 1);
        lv_field_name_item = 'MDI_item' + (lv_counter + 1);
        lv_field_name_material = 'MDI_material' + (lv_counter + 1);
        lv_field_name_plant = 'MDI_plant' + (lv_counter + 1);
        lv_field_name_storage_location = 'MDI_storage_location' + (lv_counter + 1);
        lv_field_name_quantity = 'MDI_quantity' + (lv_counter + 1);
        lv_field_name_entry_UOM = 'MDI_entry_UOM' + (lv_counter + 1);
        lv_field_name_material_movement_type = 'MDI_material_movement_type' + (lv_counter + 1);
        lv_field_name_item_text = 'MDI_item_text' + (lv_counter + 1);
        lv_field_name_purchase_order = 'MDI_purchase_order' + (lv_counter + 1);
        lv_field_name_purchase_order_item = 'MDI_purchase_order_item' + (lv_counter + 1);
        lv_field_name_sales_order = 'MDI_sales_order' + (lv_counter + 1);
        lv_field_name_sales_order_item = 'MDI_sales_order_item' + (lv_counter + 1);        
        lv_field_name_material_document_reverse = 'MDI_material_document_reverse' + (lv_counter + 1);
        lv_field_name_fiscal_year_reverse = 'MDI_fiscal_year_reverse' + (lv_counter + 1);
        lv_field_name_item_reverse = 'MDI_item_reverse' + (lv_counter + 1);        

        lv_material_document = document.getElementById(lv_field_name_material_document).value;
        if ( lv_material_document != '')
        {
            ot_MDI_input_material_document_item[lv_counter] =
            {
            tenant : iv_tenant,
            material_document : document.getElementById(lv_field_name_material_document).value,
            fiscal_year : document.getElementById(lv_field_name_fiscal_year).value,
            item : document.getElementById(lv_field_name_item).value,
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
            material_document_reverse : '',
            fiscal_year_reverse : '',
            item_reverse : '',
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MDI_input_material_document_item;
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_copy_output_screen_R(it_MDH_output_material_document_header)
{
    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_material_document_type = '',
        lv_field_name_document_date = '',
        lv_field_name_posting_date = '',
        lv_field_name_header_reference = '',
        lv_field_name_header_text = '',
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '',
        lv_field_name_system_field_message_type = '',
        lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 2; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MDH_output_material_document_header.length)
        {
            lv_field_name_material_document = 'MDH_material_document' + (lv_counter + 1);
            lv_field_name_fiscal_year = 'MDH_fiscal_year' + (lv_counter + 1);
            lv_field_name_material_document_type = 'MDH_material_document_type' + (lv_counter + 1);
            lv_field_name_document_date = 'MDH_document_date' + (lv_counter + 1);
            lv_field_name_posting_date = 'MDH_posting_date' + (lv_counter + 1);
            lv_field_name_header_reference = 'MDH_header_reference' + (lv_counter + 1);
            lv_field_name_header_text = 'MDH_header_text' + (lv_counter + 1);
            lv_field_name_material_document_reverse = 'MDH_material_document_reverse' + (lv_counter + 1);
            lv_field_name_fiscal_year_reverse = 'MDH_fiscal_year_reverse' + (lv_counter + 1); 
            lv_field_name_system_field_message_type = 'MDH_system_field_message_type' + (lv_counter + 1); 
            lv_field_name_system_field_message_description = 'MDH_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material_document).value = it_MDH_output_material_document_header[lv_counter].material_document;
            document.getElementById(lv_field_name_fiscal_year).value = it_MDH_output_material_document_header[lv_counter].fiscal_year;
            document.getElementById(lv_field_name_material_document_type).value = it_MDH_output_material_document_header[lv_counter].material_document_type;
            document.getElementById(lv_field_name_document_date).value = it_MDH_output_material_document_header[lv_counter].document_date;
            document.getElementById(lv_field_name_posting_date).value = it_MDH_output_material_document_header[lv_counter].posting_date;
            document.getElementById(lv_field_name_header_reference).value = it_MDH_output_material_document_header[lv_counter].header_reference;
            document.getElementById(lv_field_name_header_text).value = it_MDH_output_material_document_header[lv_counter].header_text;
            document.getElementById(lv_field_name_posting_date).value = it_MDH_output_material_document_header[lv_counter].posting_date;
            document.getElementById(lv_field_name_material_document_reverse).value = it_MDH_output_material_document_header[lv_counter].material_document_reverse;
            document.getElementById(lv_field_name_fiscal_year_reverse).value = it_MDH_output_material_document_header[lv_counter].fiscal_year_reverse;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MDH_output_material_document_header[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MDH_output_material_document_header[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material_document).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material_document).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_copy_output_screen_R(it_MDI_output_material_document_item)
{
    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_item = '',
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_storage_location = '',
        lv_field_name_quantity = '',
        lv_field_name_entry_UOM = '',
        lv_field_name_material_movement_type = '',
        lv_field_name_item_text = '',
        lv_field_name_purchase_order = '',
        lv_field_name_purchase_order_item = '',
        lv_field_name_sales_order = '',
        lv_field_name_sales_order_item = '',        
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '',
        lv_field_name_item_reverse = '',
        lv_field_name_system_field_message_type = '',
        lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MDI_output_material_document_item.length)
        {
            lv_field_name_material_document = 'MDI_material_document' + (lv_counter + 1);
            lv_field_name_fiscal_year = 'MDI_fiscal_year' + (lv_counter + 1);
            lv_field_name_item = 'MDI_item' + (lv_counter + 1);
            lv_field_name_material = 'MDI_material' + (lv_counter + 1);
            lv_field_name_plant = 'MDI_plant' + (lv_counter + 1);
            lv_field_name_storage_location = 'MDI_storage_location' + (lv_counter + 1);
            lv_field_name_quantity = 'MDI_quantity' + (lv_counter + 1);
            lv_field_name_entry_UOM = 'MDI_entry_UOM' + (lv_counter + 1);
            lv_field_name_material_movement_type = 'MDI_material_movement_type' + (lv_counter + 1);
            lv_field_name_item_text = 'MDI_item_text' + (lv_counter + 1);
            lv_field_name_purchase_order = 'MDI_purchase_order' + (lv_counter + 1);
            lv_field_name_purchase_order_item = 'MDI_purchase_order_item' + (lv_counter + 1);
            lv_field_name_sales_order = 'MDI_sales_order' + (lv_counter + 1);
            lv_field_name_sales_order_item = 'MDI_sales_order_item' + (lv_counter + 1);            
            lv_field_name_material_document_reverse = 'MDI_material_document_reverse' + (lv_counter + 1);
            lv_field_name_fiscal_year_reverse = 'MDI_fiscal_year_reverse' + (lv_counter + 1); 
            lv_field_name_item_reverse = 'MDI_item_reverse' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MDI_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MDI_system_field_message_description' + (lv_counter + 1); 

            document.getElementById(lv_field_name_material_document).value = it_MDI_output_material_document_item[lv_counter].material_document;
            document.getElementById(lv_field_name_fiscal_year).value = it_MDI_output_material_document_item[lv_counter].fiscal_year;
            document.getElementById(lv_field_name_item).value = it_MDI_output_material_document_item[lv_counter].item;
            document.getElementById(lv_field_name_material).value = it_MDI_output_material_document_item[lv_counter].material;
            document.getElementById(lv_field_name_plant).value = it_MDI_output_material_document_item[lv_counter].plant;
            document.getElementById(lv_field_name_storage_location).value = it_MDI_output_material_document_item[lv_counter].storage_location;
            document.getElementById(lv_field_name_quantity).value = it_MDI_output_material_document_item[lv_counter].quantity;
            document.getElementById(lv_field_name_entry_UOM).value = it_MDI_output_material_document_item[lv_counter].entry_UOM;
            document.getElementById(lv_field_name_material_movement_type).value = it_MDI_output_material_document_item[lv_counter].material_movement_type;
            document.getElementById(lv_field_name_item_text).value = it_MDI_output_material_document_item[lv_counter].item_text;
            document.getElementById(lv_field_name_purchase_order).value = it_MDI_output_material_document_item[lv_counter].purchase_order;
            document.getElementById(lv_field_name_purchase_order_item).value = it_MDI_output_material_document_item[lv_counter].purchase_order_item;
            document.getElementById(lv_field_name_sales_order).value = it_MDI_output_material_document_item[lv_counter].sales_order;
            document.getElementById(lv_field_name_sales_order_item).value = it_MDI_output_material_document_item[lv_counter].sales_order_item;
            document.getElementById(lv_field_name_material_document_reverse).value = it_MDI_output_material_document_item[lv_counter].material_document_reverse;
            document.getElementById(lv_field_name_fiscal_year_reverse).value = it_MDI_output_material_document_item[lv_counter].fiscal_year_reverse;
            document.getElementById(lv_field_name_item_reverse).value = it_MDI_output_material_document_item[lv_counter].item_reverse;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MDI_output_material_document_item[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MDI_output_material_document_item[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material_document).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material_document).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_set_field_property_U()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 2; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MDH_material_document' + lv_counter;
        var MDH_material_document = document.getElementById(lv_field_name);
        MDH_material_document.disabled = false;

        lv_field_name = 'MDH_fiscal_year' + lv_counter;
        var MDH_fiscal_year = document.getElementById(lv_field_name);
        MDH_fiscal_year.disabled = false;

        lv_field_name = 'MDH_material_document_type' + lv_counter;
        var MDH_material_document_type = document.getElementById(lv_field_name);
        MDH_material_document_type.disabled = true;        

        lv_field_name = 'MDH_document_date' + lv_counter;        
        var MDH_document_date = document.getElementById(lv_field_name);
        MDH_document_date.disabled = true;

        lv_field_name = 'MDH_posting_date' + lv_counter;        
        var MDH_posting_date = document.getElementById(lv_field_name);
        MDH_posting_date.disabled = true; 
        
        lv_field_name = 'MDH_header_reference' + lv_counter;        
        var MDH_header_reference = document.getElementById(lv_field_name);
        MDH_header_reference.disabled = false;  
        
        lv_field_name = 'MDH_header_text' + lv_counter;        
        var MDH_header_text = document.getElementById(lv_field_name);
        MDH_header_text.disabled = false;  
        
        lv_field_name = 'MDH_material_document_reverse' + lv_counter;        
        var MDH_material_document_reverse = document.getElementById(lv_field_name);
        MDH_material_document_reverse.disabled = true;  
        
        lv_field_name = 'MDH_fiscal_year_reverse' + lv_counter;        
        var MDH_fiscal_year_reverse = document.getElementById(lv_field_name);
        MDH_fiscal_year_reverse.disabled = true;          
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_set_field_property_U()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MDI_material_document' + lv_counter;
        var MDI_material_document = document.getElementById(lv_field_name);
        MDI_material_document.disabled = false;

        lv_field_name = 'MDI_fiscal_year' + lv_counter;
        var MDI_fiscal_year = document.getElementById(lv_field_name);
        MDI_fiscal_year.disabled = false;

        lv_field_name = 'MDI_item' + lv_counter;
        var MDI_item = document.getElementById(lv_field_name);
        MDI_item.disabled = false;        

        lv_field_name = 'MDI_material' + lv_counter;        
        var MDI_material = document.getElementById(lv_field_name);
        MDI_material.disabled = true;

        lv_field_name = 'MDI_plant' + lv_counter;        
        var MDI_plant = document.getElementById(lv_field_name);
        MDI_plant.disabled = true; 
        
        lv_field_name = 'MDI_storage_location' + lv_counter;        
        var MDI_storage_location = document.getElementById(lv_field_name);
        MDI_storage_location.disabled = true;  
        
        lv_field_name = 'MDI_quantity' + lv_counter;        
        var MDI_quantity = document.getElementById(lv_field_name);
        MDI_quantity.disabled = true;  

        lv_field_name = 'MDI_entry_UOM' + lv_counter;        
        var MDI_entry_UOM = document.getElementById(lv_field_name);
        MDI_entry_UOM.disabled = true;  
        
        lv_field_name = 'MDI_material_movement_type' + lv_counter;        
        var MDI_material_movement_type = document.getElementById(lv_field_name);
        MDI_material_movement_type.disabled = true;  
        
        lv_field_name = 'MDI_item_text' + lv_counter;        
        var MDI_item_text = document.getElementById(lv_field_name);
        MDI_item_text.disabled = false;          

        lv_field_name = 'MDI_purchase_order' + lv_counter;        
        var MDI_purchase_order = document.getElementById(lv_field_name);
        MDI_purchase_order.disabled = true;  

        lv_field_name = 'MDI_purchase_order_item' + lv_counter;        
        var MDI_purchase_order_item = document.getElementById(lv_field_name);
        MDI_purchase_order_item.disabled = true;  

        lv_field_name = 'MDI_sales_order' + lv_counter;        
        var MDI_sales_order = document.getElementById(lv_field_name);
        MDI_sales_order.disabled = true;  

        lv_field_name = 'MDI_sales_order_item' + lv_counter;        
        var MDI_sales_order_item = document.getElementById(lv_field_name);
        MDI_sales_order_item.disabled = true;   

        lv_field_name = 'MDI_material_document_reverse' + lv_counter;        
        var MDI_material_document_reverse = document.getElementById(lv_field_name);
        MDI_material_document_reverse.disabled = true;  
        
        lv_field_name = 'MDI_fiscal_year_reverse' + lv_counter;        
        var MDI_fiscal_year_reverse = document.getElementById(lv_field_name);
        MDI_fiscal_year_reverse.disabled = true;
        
        lv_field_name = 'MDI_item_reverse' + lv_counter;        
        var MDI_item_reverse = document.getElementById(lv_field_name);
        MDI_item_reverse.disabled = true;         
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_copy_screen_input_U(iv_tenant)
{
    var ot_MDH_input_material_document_header = structuredClone(tt_MDH_input_material_document_header);

    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_material_document_type = '',
        lv_field_name_document_date = '',
        lv_field_name_posting_date = '',
        lv_field_name_header_reference = '',
        lv_field_name_header_text = '',
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '';

    for (lv_counter = 0; lv_counter < 2; lv_counter = lv_counter + 1)
    {
        lv_field_name_material_document = 'MDH_material_document' + (lv_counter + 1);
        lv_field_name_fiscal_year = 'MDH_fiscal_year' + (lv_counter + 1);
        lv_field_name_material_document_type = 'MDH_material_document_type' + (lv_counter + 1);
        lv_field_name_document_date = 'MDH_document_date' + (lv_counter + 1);
        lv_field_name_posting_date = 'MDH_posting_date' + (lv_counter + 1);
        lv_field_name_header_reference = 'MDH_header_reference' + (lv_counter + 1);
        lv_field_name_header_text = 'MDH_header_text' + (lv_counter + 1);
        lv_field_name_material_document_reverse = 'MDH_material_document_reverse' + (lv_counter + 1);
        lv_field_name_fiscal_year_reverse = 'MDH_fiscal_year_reverse' + (lv_counter + 1);        

        lv_material_document = document.getElementById(lv_field_name_material_document).value;
        if ( lv_material_document != '')
        {
            ot_MDH_input_material_document_header[lv_counter] =
            {
            tenant : iv_tenant,
            material_document : document.getElementById(lv_field_name_material_document).value,
            fiscal_year : document.getElementById(lv_field_name_fiscal_year).value,
            material_document_type : document.getElementById(lv_field_name_material_document_type).value,
            document_date : document.getElementById(lv_field_name_document_date).value,
            posting_date : document.getElementById(lv_field_name_posting_date).value,
            header_reference : document.getElementById(lv_field_name_header_reference).value,
            header_text : document.getElementById(lv_field_name_header_text).value,
            material_document_reverse : '',
            fiscal_year_reverse : '',
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MDH_input_material_document_header;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_copy_screen_input_U(iv_tenant)
{
    var ot_MDI_input_material_document_item = structuredClone(tt_MDI_input_material_document_item);

    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_item = '',
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_storage_location = '',
        lv_field_name_quantity = '',
        lv_field_name_entry_UOM = '',
        lv_field_name_material_movement_type = '',
        lv_field_name_item_text = '',
        lv_field_name_purchase_order = '',
        lv_field_name_purchase_order_item = '',
        lv_field_name_sales_order = '',
        lv_field_name_sales_order_item = '',        
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '',
        lv_field_name_item_reverse = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material_document = 'MDI_material_document' + (lv_counter + 1);
        lv_field_name_fiscal_year = 'MDI_fiscal_year' + (lv_counter + 1);
        lv_field_name_item = 'MDI_item' + (lv_counter + 1);
        lv_field_name_material = 'MDI_material' + (lv_counter + 1);
        lv_field_name_plant = 'MDI_plant' + (lv_counter + 1);
        lv_field_name_storage_location = 'MDI_storage_location' + (lv_counter + 1);
        lv_field_name_quantity = 'MDI_quantity' + (lv_counter + 1);
        lv_field_name_entry_UOM = 'MDI_entry_UOM' + (lv_counter + 1);
        lv_field_name_material_movement_type = 'MDI_material_movement_type' + (lv_counter + 1);
        lv_field_name_item_text = 'MDI_item_text' + (lv_counter + 1);
        lv_field_name_purchase_order = 'MDI_purchase_order' + (lv_counter + 1);
        lv_field_name_purchase_order_item = 'MDI_purchase_order_item' + (lv_counter + 1);
        lv_field_name_sales_order = 'MDI_sales_order' + (lv_counter + 1);
        lv_field_name_sales_order_item = 'MDI_sales_order_item' + (lv_counter + 1);        
        lv_field_name_material_document_reverse = 'MDI_material_document_reverse' + (lv_counter + 1);
        lv_field_name_fiscal_year_reverse = 'MDI_fiscal_year_reverse' + (lv_counter + 1);
        lv_field_name_item_reverse = 'MDI_item_reverse' + (lv_counter + 1);        

        lv_material_document = document.getElementById(lv_field_name_material_document).value;
        if ( lv_material_document != '')
        {
            ot_MDI_input_material_document_item[lv_counter] =
            {
            tenant : iv_tenant,
            material_document : document.getElementById(lv_field_name_material_document).value,
            fiscal_year : document.getElementById(lv_field_name_fiscal_year).value,
            item : document.getElementById(lv_field_name_item).value,
            material : document.getElementById(lv_field_name_material).value,
            plant : document.getElementById(lv_field_name_plant).value,
            storage_location : document.getElementById(lv_field_name_storage_location).value,
            quantity : document.getElementById(lv_field_name_quantity).value,
            entry_UOM : document.getElementById(lv_field_name_entry_UOM).value,
            material_movement_type : document.getElementById(lv_field_name_material_movement_type).value,
            item_text : document.getElementById(lv_field_name_item_text).value,
            purchase_order : '',
            purchase_order_item : '',
            sales_order : '',
            sales_order_item : '',            
            material_document_reverse : '',
            fiscal_year_reverse : '',
            item_reverse : '',
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MDI_input_material_document_item;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_copy_output_screen_U(it_MDH_output_material_document_header)
{
    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_material_document_type = '',
        lv_field_name_document_date = '',
        lv_field_name_posting_date = '',
        lv_field_name_header_reference = '',
        lv_field_name_header_text = '',
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = ''
        lv_field_name_system_field_message_type = '',
        lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 2; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MDH_output_material_document_header.length)
        {
            lv_field_name_material_document = 'MDH_material_document' + (lv_counter + 1);
            lv_field_name_fiscal_year = 'MDH_fiscal_year' + (lv_counter + 1);
            lv_field_name_material_document_type = 'MDH_material_document_type' + (lv_counter + 1);
            lv_field_name_document_date = 'MDH_document_date' + (lv_counter + 1);
            lv_field_name_posting_date = 'MDH_posting_date' + (lv_counter + 1);
            lv_field_name_header_reference = 'MDH_header_reference' + (lv_counter + 1);
            lv_field_name_header_text = 'MDH_header_text' + (lv_counter + 1);
            lv_field_name_material_document_reverse = 'MDH_material_document_reverse' + (lv_counter + 1);
            lv_field_name_fiscal_year_reverse = 'MDH_fiscal_year_reverse' + (lv_counter + 1); 
            lv_field_name_system_field_message_type = 'MDH_system_field_message_type' + (lv_counter + 1); 
            lv_field_name_system_field_message_description = 'MDH_system_field_message_description' + (lv_counter + 1);

            document.getElementById(lv_field_name_material_document).value = it_MDH_output_material_document_header[lv_counter].material_document;
            document.getElementById(lv_field_name_fiscal_year).value = it_MDH_output_material_document_header[lv_counter].fiscal_year;
            document.getElementById(lv_field_name_material_document_type).value = it_MDH_output_material_document_header[lv_counter].material_document_type;
            document.getElementById(lv_field_name_document_date).value = it_MDH_output_material_document_header[lv_counter].document_date;
            document.getElementById(lv_field_name_posting_date).value = it_MDH_output_material_document_header[lv_counter].posting_date;
            document.getElementById(lv_field_name_header_reference).value = it_MDH_output_material_document_header[lv_counter].header_reference;
            document.getElementById(lv_field_name_header_text).value = it_MDH_output_material_document_header[lv_counter].header_text;
            document.getElementById(lv_field_name_posting_date).value = it_MDH_output_material_document_header[lv_counter].posting_date;
            document.getElementById(lv_field_name_material_document_reverse).value = it_MDH_output_material_document_header[lv_counter].material_document_reverse;
            document.getElementById(lv_field_name_fiscal_year_reverse).value = it_MDH_output_material_document_header[lv_counter].fiscal_year_reverse;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MDH_output_material_document_header[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MDH_output_material_document_header[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material_document).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material_document).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_copy_output_screen_U(it_MDI_output_material_document_item)
{
    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_item = '',
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_storage_location = '',
        lv_field_name_quantity = '',
        lv_field_name_entry_UOM = '',
        lv_field_name_material_movement_type = '',
        lv_field_name_item_text = '',
        lv_field_name_purchase_order = '',
        lv_field_name_purchase_order_item = '',
        lv_field_name_sales_order = '',
        lv_field_name_sales_order_item = '',        
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '',
        lv_field_name_item_reverse = ''
        lv_field_name_system_field_message_type = '',
        lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MDI_output_material_document_item.length)
        {
            lv_field_name_material_document = 'MDI_material_document' + (lv_counter + 1);
            lv_field_name_fiscal_year = 'MDI_fiscal_year' + (lv_counter + 1);
            lv_field_name_item = 'MDI_item' + (lv_counter + 1);
            lv_field_name_material = 'MDI_material' + (lv_counter + 1);
            lv_field_name_plant = 'MDI_plant' + (lv_counter + 1);
            lv_field_name_storage_location = 'MDI_storage_location' + (lv_counter + 1);
            lv_field_name_quantity = 'MDI_quantity' + (lv_counter + 1);
            lv_field_name_entry_UOM = 'MDI_entry_UOM' + (lv_counter + 1);
            lv_field_name_material_movement_type = 'MDI_material_movement_type' + (lv_counter + 1);
            lv_field_name_item_text = 'MDI_item_text' + (lv_counter + 1);
            lv_field_name_purchase_order = 'MDI_purchase_order' + (lv_counter + 1);
            lv_field_name_purchase_order_item = 'MDI_purchase_order_item' + (lv_counter + 1);
            lv_field_name_sales_order = 'MDI_sales_order' + (lv_counter + 1);
            lv_field_name_sales_order_item = 'MDI_sales_order_item' + (lv_counter + 1);            
            lv_field_name_material_document_reverse = 'MDI_material_document_reverse' + (lv_counter + 1);
            lv_field_name_fiscal_year_reverse = 'MDI_fiscal_year_reverse' + (lv_counter + 1); 
            lv_field_name_item_reverse = 'MDI_item_reverse' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MDI_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MDI_system_field_message_description' + (lv_counter + 1);  

            document.getElementById(lv_field_name_material_document).value = it_MDI_output_material_document_item[lv_counter].material_document;
            document.getElementById(lv_field_name_fiscal_year).value = it_MDI_output_material_document_item[lv_counter].fiscal_year;
            document.getElementById(lv_field_name_item).value = it_MDI_output_material_document_item[lv_counter].item;
            document.getElementById(lv_field_name_material).value = it_MDI_output_material_document_item[lv_counter].material;
            document.getElementById(lv_field_name_plant).value = it_MDI_output_material_document_item[lv_counter].plant;
            document.getElementById(lv_field_name_storage_location).value = it_MDI_output_material_document_item[lv_counter].storage_location;
            document.getElementById(lv_field_name_quantity).value = it_MDI_output_material_document_item[lv_counter].quantity;
            document.getElementById(lv_field_name_entry_UOM).value = it_MDI_output_material_document_item[lv_counter].entry_UOM;
            document.getElementById(lv_field_name_material_movement_type).value = it_MDI_output_material_document_item[lv_counter].material_movement_type;
            document.getElementById(lv_field_name_item_text).value = it_MDI_output_material_document_item[lv_counter].item_text;
            document.getElementById(lv_field_name_purchase_order).value = it_MDI_output_material_document_item[lv_counter].purchase_order;
            document.getElementById(lv_field_name_purchase_order_item).value = it_MDI_output_material_document_item[lv_counter].purchase_order_item;
            document.getElementById(lv_field_name_sales_order).value = it_MDI_output_material_document_item[lv_counter].sales_order;
            document.getElementById(lv_field_name_sales_order_item).value = it_MDI_output_material_document_item[lv_counter].sales_order_item;
            document.getElementById(lv_field_name_material_document_reverse).value = it_MDI_output_material_document_item[lv_counter].material_document_reverse;
            document.getElementById(lv_field_name_fiscal_year_reverse).value = it_MDI_output_material_document_item[lv_counter].fiscal_year_reverse;
            document.getElementById(lv_field_name_item_reverse).value = it_MDI_output_material_document_item[lv_counter].item_reverse;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MDI_output_material_document_item[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MDI_output_material_document_item[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material_document).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material_document).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_copy_screen_input_D(iv_tenant)
{
    var ot_MDH_input_material_document_header = structuredClone(tt_MDH_input_material_document_header);

    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_material_document_type = '',
        lv_field_name_document_date = '',
        lv_field_name_posting_date = '',
        lv_field_name_header_reference = '',
        lv_field_name_header_text = '',
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '';

    for (lv_counter = 0; lv_counter < 2; lv_counter = lv_counter + 1)
    {
        lv_field_name_material_document = 'MDH_material_document' + (lv_counter + 1);
        lv_field_name_fiscal_year = 'MDH_fiscal_year' + (lv_counter + 1);
        lv_field_name_material_document_type = 'MDH_material_document_type' + (lv_counter + 1);
        lv_field_name_document_date = 'MDH_document_date' + (lv_counter + 1);
        lv_field_name_posting_date = 'MDH_posting_date' + (lv_counter + 1);
        lv_field_name_header_reference = 'MDH_header_reference' + (lv_counter + 1);
        lv_field_name_header_text = 'MDH_header_text' + (lv_counter + 1);
        lv_field_name_material_document_reverse = 'MDH_material_document_reverse' + (lv_counter + 1);
        lv_field_name_fiscal_year_reverse = 'MDH_fiscal_year_reverse' + (lv_counter + 1);        

        lv_material_document = document.getElementById(lv_field_name_material_document).value;
        if ( lv_material_document != '')
        {
            ot_MDH_input_material_document_header[lv_counter] =
            {
            tenant : iv_tenant,
            material_document : document.getElementById(lv_field_name_material_document).value,
            fiscal_year : document.getElementById(lv_field_name_fiscal_year).value,
            material_document_type : document.getElementById(lv_field_name_material_document_type).value,
            document_date : document.getElementById(lv_field_name_document_date).value,
            posting_date : document.getElementById(lv_field_name_posting_date).value,
            header_reference : document.getElementById(lv_field_name_header_reference).value,
            header_text : document.getElementById(lv_field_name_header_text).value,
            material_document_reverse : document.getElementById(lv_field_name_material_document_reverse).value,
            fiscal_year_reverse : document.getElementById(lv_field_name_fiscal_year_reverse).value,
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MDH_input_material_document_header; 
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_copy_screen_input_D(iv_tenant)
{
    var ot_MDI_input_material_document_item = structuredClone(tt_MDI_input_material_document_item);

    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_item = '',
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_storage_location = '',
        lv_field_name_quantity = '',
        lv_field_name_entry_UOM = '',
        lv_field_name_material_movement_type = '',
        lv_field_name_item_text = '',
        lv_field_name_purchase_order = '',
        lv_field_name_purchase_order_item = '',
        lv_field_name_sales_order = '',
        lv_field_name_sales_order_item = '',        
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '',
        lv_field_name_item_reverse = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material_document = 'MDI_material_document' + (lv_counter + 1);
        lv_field_name_fiscal_year = 'MDI_fiscal_year' + (lv_counter + 1);
        lv_field_name_item = 'MDI_item' + (lv_counter + 1);
        lv_field_name_material = 'MDI_material' + (lv_counter + 1);
        lv_field_name_plant = 'MDI_plant' + (lv_counter + 1);
        lv_field_name_storage_location = 'MDI_storage_location' + (lv_counter + 1);
        lv_field_name_quantity = 'MDI_quantity' + (lv_counter + 1);
        lv_field_name_entry_UOM = 'MDI_entry_UOM' + (lv_counter + 1);
        lv_field_name_material_movement_type = 'MDI_material_movement_type' + (lv_counter + 1);
        lv_field_name_item_text = 'MDI_item_text' + (lv_counter + 1);
        lv_field_name_purchase_order = 'MDI_purchase_order' + (lv_counter + 1);
        lv_field_name_purchase_order_item = 'MDI_purchase_order_item' + (lv_counter + 1);
        lv_field_name_sales_order = 'MDI_sales_order' + (lv_counter + 1);
        lv_field_name_sales_order_item = 'MDI_sales_order_item' + (lv_counter + 1);        
        lv_field_name_material_document_reverse = 'MDI_material_document_reverse' + (lv_counter + 1);
        lv_field_name_fiscal_year_reverse = 'MDI_fiscal_year_reverse' + (lv_counter + 1);
        lv_field_name_item_reverse = 'MDI_item_reverse' + (lv_counter + 1);        

        lv_material_document = document.getElementById(lv_field_name_material_document).value;
        if ( lv_material_document != '')
        {
            ot_MDI_input_material_document_item[lv_counter] =
            {
            tenant : iv_tenant,
            material_document : document.getElementById(lv_field_name_material_document).value,
            fiscal_year : document.getElementById(lv_field_name_fiscal_year).value,
            item : document.getElementById(lv_field_name_item).value,
            material : document.getElementById(lv_field_name_material).value,
            plant : document.getElementById(lv_field_name_plant).value,
            storage_location : document.getElementById(lv_field_name_storage_location).value,
            quantity : document.getElementById(lv_field_name_quantity).value,
            entry_UOM : document.getElementById(lv_field_name_entry_UOM).value,
            material_movement_type : document.getElementById(lv_field_name_material_movement_type).value,
            item_text : document.getElementById(lv_field_name_item_text).value,
            purchase_order : document.getElementById(lv_field_name_purchase_order).value,
            purchase_order_item : document.getElementById(lv_field_name_purchase_order_item).value,
            sales_order : document.getElementById(lv_field_name_sales_order).value,
            sales_order_item : document.getElementById(lv_field_name_sales_order_item).value,            
            material_document_reverse : document.getElementById(lv_field_name_material_document_reverse).value,
            fiscal_year_reverse : document.getElementById(lv_field_name_fiscal_year_reverse).value,
            item_reverse : document.getElementById(lv_field_name_item_reverse).value,
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MDI_input_material_document_item;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_copy_output_screen_D(it_MDH_output_material_document_header)
{
    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_material_document_type = '',
        lv_field_name_document_date = '',
        lv_field_name_posting_date = '',
        lv_field_name_header_reference = '',
        lv_field_name_header_text = '',
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '',
        lv_field_name_system_field_message_type = '',
        lv_field_name_system_field_message_description = '';        

    for (lv_counter = 0; lv_counter < 2; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MDH_output_material_document_header.length)
        {
            lv_field_name_material_document = 'MDH_material_document' + (lv_counter + 1);
            lv_field_name_fiscal_year = 'MDH_fiscal_year' + (lv_counter + 1);
            lv_field_name_material_document_type = 'MDH_material_document_type' + (lv_counter + 1);
            lv_field_name_document_date = 'MDH_document_date' + (lv_counter + 1);
            lv_field_name_posting_date = 'MDH_posting_date' + (lv_counter + 1);
            lv_field_name_header_reference = 'MDH_header_reference' + (lv_counter + 1);
            lv_field_name_header_text = 'MDH_header_text' + (lv_counter + 1);
            lv_field_name_material_document_reverse = 'MDH_material_document_reverse' + (lv_counter + 1);
            lv_field_name_fiscal_year_reverse = 'MDH_fiscal_year_reverse' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MDH_system_field_message_type' + (lv_counter + 1); 
            lv_field_name_system_field_message_description = 'MDH_system_field_message_description' + (lv_counter + 1);             

            document.getElementById(lv_field_name_material_document).value = it_MDH_output_material_document_header[lv_counter].material_document;
            document.getElementById(lv_field_name_fiscal_year).value = it_MDH_output_material_document_header[lv_counter].fiscal_year;
            document.getElementById(lv_field_name_material_document_type).value = it_MDH_output_material_document_header[lv_counter].material_document_type;
            document.getElementById(lv_field_name_document_date).value = it_MDH_output_material_document_header[lv_counter].document_date;
            document.getElementById(lv_field_name_posting_date).value = it_MDH_output_material_document_header[lv_counter].posting_date;
            document.getElementById(lv_field_name_header_reference).value = it_MDH_output_material_document_header[lv_counter].header_reference;
            document.getElementById(lv_field_name_header_text).value = it_MDH_output_material_document_header[lv_counter].header_text;
            document.getElementById(lv_field_name_posting_date).value = it_MDH_output_material_document_header[lv_counter].posting_date;
            document.getElementById(lv_field_name_material_document_reverse).value = it_MDH_output_material_document_header[lv_counter].material_document_reverse;
            document.getElementById(lv_field_name_fiscal_year_reverse).value = it_MDH_output_material_document_header[lv_counter].fiscal_year_reverse;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MDH_output_material_document_header[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MDH_output_material_document_header[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material_document).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material_document).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_copy_output_screen_D(it_MDI_output_material_document_item)
{
    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_item = '',
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_storage_location = '',
        lv_field_name_quantity = '',
        lv_field_name_entry_UOM = '',
        lv_field_name_material_movement_type = '',
        lv_field_name_item_text = '',
        lv_field_name_purchase_order = '',
        lv_field_name_purchase_order_item = '',
        lv_field_name_sales_order = '',
        lv_field_name_sales_order_item = '',        
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '',
        lv_field_name_item_reverse = '',
        lv_field_name_system_field_message_type = '',
        lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MDI_output_material_document_item.length)
        {
            lv_field_name_material_document = 'MDI_material_document' + (lv_counter + 1);
            lv_field_name_fiscal_year = 'MDI_fiscal_year' + (lv_counter + 1);
            lv_field_name_item = 'MDI_item' + (lv_counter + 1);
            lv_field_name_material = 'MDI_material' + (lv_counter + 1);
            lv_field_name_plant = 'MDI_plant' + (lv_counter + 1);
            lv_field_name_storage_location = 'MDI_storage_location' + (lv_counter + 1);
            lv_field_name_quantity = 'MDI_quantity' + (lv_counter + 1);
            lv_field_name_entry_UOM = 'MDI_entry_UOM' + (lv_counter + 1);
            lv_field_name_material_movement_type = 'MDI_material_movement_type' + (lv_counter + 1);
            lv_field_name_item_text = 'MDI_item_text' + (lv_counter + 1);
            lv_field_name_purchase_order = 'MDI_purchase_order' + (lv_counter + 1);
            lv_field_name_purchase_order_item = 'MDI_purchase_order_item' + (lv_counter + 1);
            lv_field_name_sales_order = 'MDI_sales_order' + (lv_counter + 1);
            lv_field_name_sales_order_item = 'MDI_sales_order_item' + (lv_counter + 1);            
            lv_field_name_material_document_reverse = 'MDI_material_document_reverse' + (lv_counter + 1);
            lv_field_name_fiscal_year_reverse = 'MDI_fiscal_year_reverse' + (lv_counter + 1); 
            lv_field_name_item_reverse = 'MDI_item_reverse' + (lv_counter + 1); 
            lv_field_name_system_field_message_type = 'MDI_system_field_message_type' + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MDI_system_field_message_description' + (lv_counter + 1); 

            document.getElementById(lv_field_name_material_document).value = it_MDI_output_material_document_item[lv_counter].material_document;
            document.getElementById(lv_field_name_fiscal_year).value = it_MDI_output_material_document_item[lv_counter].fiscal_year;
            document.getElementById(lv_field_name_item).value = it_MDI_output_material_document_item[lv_counter].item;
            document.getElementById(lv_field_name_material).value = it_MDI_output_material_document_item[lv_counter].material;
            document.getElementById(lv_field_name_plant).value = it_MDI_output_material_document_item[lv_counter].plant;
            document.getElementById(lv_field_name_storage_location).value = it_MDI_output_material_document_item[lv_counter].storage_location;
            document.getElementById(lv_field_name_quantity).value = it_MDI_output_material_document_item[lv_counter].quantity;
            document.getElementById(lv_field_name_entry_UOM).value = it_MDI_output_material_document_item[lv_counter].entry_UOM;
            document.getElementById(lv_field_name_material_movement_type).value = it_MDI_output_material_document_item[lv_counter].material_movement_type;
            document.getElementById(lv_field_name_item_text).value = it_MDI_output_material_document_item[lv_counter].item_text;
            document.getElementById(lv_field_name_purchase_order).value = it_MDI_output_material_document_item[lv_counter].purchase_order;
            document.getElementById(lv_field_name_purchase_order_item).value = it_MDI_output_material_document_item[lv_counter].purchase_order_item;
            document.getElementById(lv_field_name_sales_order).value = it_MDI_output_material_document_item[lv_counter].sales_order;
            document.getElementById(lv_field_name_sales_order_item).value = it_MDI_output_material_document_item[lv_counter].sales_order_item;            
            document.getElementById(lv_field_name_material_document_reverse).value = it_MDI_output_material_document_item[lv_counter].material_document_reverse;
            document.getElementById(lv_field_name_fiscal_year_reverse).value = it_MDI_output_material_document_item[lv_counter].fiscal_year_reverse;
            document.getElementById(lv_field_name_item_reverse).value = it_MDI_output_material_document_item[lv_counter].item_reverse;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MDI_output_material_document_item[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MDI_output_material_document_item[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material_document).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material_document).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_set_field_property_D()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 2; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MDH_material_document' + lv_counter;
        var MDH_material_document = document.getElementById(lv_field_name);
        MDH_material_document.disabled = false;

        lv_field_name = 'MDH_fiscal_year' + lv_counter;
        var MDH_fiscal_year = document.getElementById(lv_field_name);
        MDH_fiscal_year.disabled = false;

        lv_field_name = 'MDH_material_document_type' + lv_counter;
        var MDH_material_document_type = document.getElementById(lv_field_name);
        MDH_material_document_type.disabled = true;        

        lv_field_name = 'MDH_document_date' + lv_counter;        
        var MDH_document_date = document.getElementById(lv_field_name);
        MDH_document_date.disabled = true;

        lv_field_name = 'MDH_posting_date' + lv_counter;        
        var MDH_posting_date = document.getElementById(lv_field_name);
        MDH_posting_date.disabled = true; 
        
        lv_field_name = 'MDH_header_reference' + lv_counter;        
        var MDH_header_reference = document.getElementById(lv_field_name);
        MDH_header_reference.disabled = true;  
        
        lv_field_name = 'MDH_header_text' + lv_counter;        
        var MDH_header_text = document.getElementById(lv_field_name);
        MDH_header_text.disabled = true;  
        
        lv_field_name = 'MDH_material_document_reverse' + lv_counter;        
        var MDH_material_document_reverse = document.getElementById(lv_field_name);
        MDH_material_document_reverse.disabled = false;  
        
        lv_field_name = 'MDH_fiscal_year_reverse' + lv_counter;        
        var MDH_fiscal_year_reverse = document.getElementById(lv_field_name);
        MDH_fiscal_year_reverse.disabled = false;          
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_set_field_property_D()
{
    var lv_counter = 0,
        lv_field_name = '';

    for (lv_counter = 1; lv_counter <= 8; lv_counter = lv_counter + 1)
    {
        lv_field_name = 'MDI_material_document' + lv_counter;
        var MDI_material_document = document.getElementById(lv_field_name);
        MDI_material_document.disabled = false;

        lv_field_name = 'MDI_fiscal_year' + lv_counter;
        var MDI_fiscal_year = document.getElementById(lv_field_name);
        MDI_fiscal_year.disabled = false;

        lv_field_name = 'MDI_item' + lv_counter;
        var MDI_item = document.getElementById(lv_field_name);
        MDI_item.disabled = false;        

        lv_field_name = 'MDI_material' + lv_counter;        
        var MDI_material = document.getElementById(lv_field_name);
        MDI_material.disabled = true;

        lv_field_name = 'MDI_plant' + lv_counter;        
        var MDI_plant = document.getElementById(lv_field_name);
        MDI_plant.disabled = true; 
        
        lv_field_name = 'MDI_storage_location' + lv_counter;        
        var MDI_storage_location = document.getElementById(lv_field_name);
        MDI_storage_location.disabled = true;  
        
        lv_field_name = 'MDI_quantity' + lv_counter;        
        var MDI_quantity = document.getElementById(lv_field_name);
        MDI_quantity.disabled = true;  

        lv_field_name = 'MDI_entry_UOM' + lv_counter;        
        var MDI_entry_UOM = document.getElementById(lv_field_name);
        MDI_entry_UOM.disabled = true;  
        
        lv_field_name = 'MDI_material_movement_type' + lv_counter;        
        var MDI_material_movement_type = document.getElementById(lv_field_name);
        MDI_material_movement_type.disabled = true;  
        
        lv_field_name = 'MDI_item_text' + lv_counter;        
        var MDI_item_text = document.getElementById(lv_field_name);
        MDI_item_text.disabled = true;          

        lv_field_name = 'MDI_purchase_order' + lv_counter;        
        var MDI_purchase_order = document.getElementById(lv_field_name);
        MDI_purchase_order.disabled = true;  

        lv_field_name = 'MDI_purchase_order_item' + lv_counter;        
        var MDI_purchase_order_item = document.getElementById(lv_field_name);
        MDI_purchase_order_item.disabled = true;  

        lv_field_name = 'MDI_sales_order' + lv_counter;        
        var MDI_sales_order = document.getElementById(lv_field_name);
        MDI_sales_order.disabled = true;  

        lv_field_name = 'MDI_sales_order_item' + lv_counter;        
        var MDI_sales_order_item = document.getElementById(lv_field_name);
        MDI_sales_order_item.disabled = true;           

        lv_field_name = 'MDI_material_document_reverse' + lv_counter;        
        var MDI_material_document_reverse = document.getElementById(lv_field_name);
        MDI_material_document_reverse.disabled = false;  
        
        lv_field_name = 'MDI_fiscal_year_reverse' + lv_counter;        
        var MDI_fiscal_year_reverse = document.getElementById(lv_field_name);
        MDI_fiscal_year_reverse.disabled = false;
        
        lv_field_name = 'MDI_item_reverse' + lv_counter;        
        var MDI_item_reverse = document.getElementById(lv_field_name);
        MDI_item_reverse.disabled = false;         
    }
}    


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_copy_screen_input_C(iv_tenant)
{
    var ot_MDH_input_material_document_header = structuredClone(tt_MDH_input_material_document_header);

    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_material_document_type = '',
        lv_field_name_document_date = '',
        lv_field_name_posting_date = '',
        lv_field_name_header_reference = '',
        lv_field_name_header_text = '',
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '';

    for (lv_counter = 0; lv_counter < 2; lv_counter = lv_counter + 1)
    {
        lv_field_name_material_document = 'MDH_material_document' + (lv_counter + 1);
        lv_field_name_fiscal_year = 'MDH_fiscal_year' + (lv_counter + 1);
        lv_field_name_material_document_type = 'MDH_material_document_type' + (lv_counter + 1);
        lv_field_name_document_date = 'MDH_document_date' + (lv_counter + 1);
        lv_field_name_posting_date = 'MDH_posting_date' + (lv_counter + 1);
        lv_field_name_header_reference = 'MDH_header_reference' + (lv_counter + 1);
        lv_field_name_header_text = 'MDH_header_text' + (lv_counter + 1);
        lv_field_name_material_document_reverse = 'MDH_material_document_reverse' + (lv_counter + 1);
        lv_field_name_fiscal_year_reverse = 'MDH_fiscal_year_reverse' + (lv_counter + 1);        

        lv_material_document = document.getElementById(lv_field_name_material_document).value;
        if ( lv_material_document != '')
        {
            ot_MDH_input_material_document_header[lv_counter] =
            {
            tenant : iv_tenant,
            material_document : document.getElementById(lv_field_name_material_document).value,
            fiscal_year : document.getElementById(lv_field_name_fiscal_year).value,
            material_document_type : document.getElementById(lv_field_name_material_document_type).value,
            document_date : document.getElementById(lv_field_name_document_date).value,
            posting_date : document.getElementById(lv_field_name_posting_date).value,
            header_reference : document.getElementById(lv_field_name_header_reference).value,
            header_text : document.getElementById(lv_field_name_header_text).value,
            material_document_reverse : '',
            fiscal_year_reverse : '',
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MDH_input_material_document_header;   
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_copy_screen_input_C(iv_tenant)
{
    var ot_MDI_input_material_document_item = structuredClone(tt_MDI_input_material_document_item);

    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_item = '',
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_storage_location = '',
        lv_field_name_quantity = '',
        lv_field_name_entry_UOM = '',
        lv_field_name_material_movement_type = '',
        lv_field_name_item_text = '',
        lv_field_name_purchase_order = '',
        lv_field_name_purchase_order_item = '',
        lv_field_name_sales_order = '',
        lv_field_name_sales_order_item = '',
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '',
        lv_field_name_item_reverse = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        lv_field_name_material_document = 'MDI_material_document' + (lv_counter + 1);
        lv_field_name_fiscal_year = 'MDI_fiscal_year' + (lv_counter + 1);
        lv_field_name_item = 'MDI_item' + (lv_counter + 1);
        lv_field_name_material = 'MDI_material' + (lv_counter + 1);
        lv_field_name_plant = 'MDI_plant' + (lv_counter + 1);
        lv_field_name_storage_location = 'MDI_storage_location' + (lv_counter + 1);
        lv_field_name_quantity = 'MDI_quantity' + (lv_counter + 1);
        lv_field_name_entry_UOM = 'MDI_entry_UOM' + (lv_counter + 1);
        lv_field_name_material_movement_type = 'MDI_material_movement_type' + (lv_counter + 1);
        lv_field_name_item_text = 'MDI_item_text' + (lv_counter + 1);
        lv_field_name_purchase_order = 'MDI_purchase_order' + (lv_counter + 1);
        lv_field_name_purchase_order_item = 'MDI_purchase_order_item' + (lv_counter + 1);
        lv_field_name_sales_order = 'MDI_sales_order' + (lv_counter + 1);
        lv_field_name_sales_order_item = 'MDI_sales_order_item' + (lv_counter + 1);
        lv_field_name_material_document_reverse = 'MDI_material_document_reverse' + (lv_counter + 1);
        lv_field_name_fiscal_year_reverse = 'MDI_fiscal_year_reverse' + (lv_counter + 1);
        lv_field_name_item_reverse = 'MDI_item_reverse' + (lv_counter + 1);        

        lv_material_document = document.getElementById(lv_field_name_material_document).value;
        if ( lv_material_document != '')
        {
            ot_MDI_input_material_document_item[lv_counter] =
            {
            tenant : iv_tenant,
            material_document : document.getElementById(lv_field_name_material_document).value,
            fiscal_year : document.getElementById(lv_field_name_fiscal_year).value,
            item : document.getElementById(lv_field_name_item).value,
            material : document.getElementById(lv_field_name_material).value,
            plant : document.getElementById(lv_field_name_plant).value,
            storage_location : document.getElementById(lv_field_name_storage_location).value,
            quantity : document.getElementById(lv_field_name_quantity).value,
            entry_UOM : document.getElementById(lv_field_name_entry_UOM).value,
            material_movement_type : document.getElementById(lv_field_name_material_movement_type).value,
            item_text : document.getElementById(lv_field_name_item_text).value,
            purchase_order : document.getElementById(lv_field_name_purchase_order).value,
            purchase_order_item : document.getElementById(lv_field_name_purchase_order_item).value,
            sales_order : document.getElementById(lv_field_name_sales_order).value,
            sales_order_item : document.getElementById(lv_field_name_sales_order_item).value,
            material_document_reverse : '',
            fiscal_year_reverse : '',
            item_reverse : '',
            system_field_message_type : '',
            system_field_message_description : ''
            };
        }
    }

    return ot_MDI_input_material_document_item;
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDH_copy_output_screen_C(it_MDH_output_material_document_header)
{
    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_material_document_type = '',
        lv_field_name_document_date = '',
        lv_field_name_posting_date = '',
        lv_field_name_header_reference = '',
        lv_field_name_header_text = '',
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '',
        lv_field_name_system_field_message_type = '',
        lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 2; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MDH_output_material_document_header.length)
        {
            lv_field_name_material_document = 'MDH_material_document' + (lv_counter + 1);
            lv_field_name_fiscal_year = 'MDH_fiscal_year' + (lv_counter + 1);
            lv_field_name_material_document_type = 'MDH_material_document_type' + (lv_counter + 1);
            lv_field_name_document_date = 'MDH_document_date' + (lv_counter + 1);
            lv_field_name_posting_date = 'MDH_posting_date' + (lv_counter + 1);
            lv_field_name_header_reference = 'MDH_header_reference' + (lv_counter + 1);
            lv_field_name_header_text = 'MDH_header_text' + (lv_counter + 1);
            lv_field_name_material_document_reverse = 'MDH_material_document_reverse' + (lv_counter + 1);
            lv_field_name_fiscal_year_reverse = 'MDH_fiscal_year_reverse' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MDH_system_field_message_type'  + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MDH_system_field_message_description'   + (lv_counter + 1);

            document.getElementById(lv_field_name_material_document).value = it_MDH_output_material_document_header[lv_counter].material_document;
            document.getElementById(lv_field_name_fiscal_year).value = it_MDH_output_material_document_header[lv_counter].fiscal_year;
            document.getElementById(lv_field_name_material_document_type).value = it_MDH_output_material_document_header[lv_counter].material_document_type;
            document.getElementById(lv_field_name_document_date).value = it_MDH_output_material_document_header[lv_counter].document_date;
            document.getElementById(lv_field_name_posting_date).value = it_MDH_output_material_document_header[lv_counter].posting_date;
            document.getElementById(lv_field_name_header_reference).value = it_MDH_output_material_document_header[lv_counter].header_reference;
            document.getElementById(lv_field_name_header_text).value = it_MDH_output_material_document_header[lv_counter].header_text;
            document.getElementById(lv_field_name_posting_date).value = it_MDH_output_material_document_header[lv_counter].posting_date;
            document.getElementById(lv_field_name_material_document_reverse).value = it_MDH_output_material_document_header[lv_counter].material_document_reverse;
            document.getElementById(lv_field_name_fiscal_year_reverse).value = it_MDH_output_material_document_header[lv_counter].fiscal_year_reverse;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MDH_output_material_document_header[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MDH_output_material_document_header[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material_document).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material_document).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MDI_copy_output_screen_C(it_MDI_output_material_document_item)
{
    var lv_material_document = '',
        lv_counter = 0,
        lv_field_name_material_document = '',
        lv_field_name_fiscal_year = '',
        lv_field_name_item = '',
        lv_field_name_material = '',
        lv_field_name_plant = '',
        lv_field_name_storage_location = '',
        lv_field_name_quantity = '',
        lv_field_name_entry_UOM = '',
        lv_field_name_material_movement_type = '',
        lv_field_name_item_text = '',
        lv_field_name_purchase_order = '',
        lv_field_name_purchase_order_item = '',
        lv_field_name_sales_order = '',
        lv_field_name_sales_order_item = '',        
        lv_field_name_material_document_reverse = '',
        lv_field_name_fiscal_year_reverse = '',
        lv_field_name_item_reverse = '',
        lv_field_name_system_field_message_type = '',
        lv_field_name_system_field_message_description = '';

    for (lv_counter = 0; lv_counter < 8; lv_counter = lv_counter + 1)
    {
        if (lv_counter < it_MDI_output_material_document_item.length)
        {
            lv_field_name_material_document = 'MDI_material_document' + (lv_counter + 1);
            lv_field_name_fiscal_year = 'MDI_fiscal_year' + (lv_counter + 1);
            lv_field_name_item = 'MDI_item' + (lv_counter + 1);
            lv_field_name_material = 'MDI_material' + (lv_counter + 1);
            lv_field_name_plant = 'MDI_plant' + (lv_counter + 1);
            lv_field_name_storage_location = 'MDI_storage_location' + (lv_counter + 1);
            lv_field_name_quantity = 'MDI_quantity' + (lv_counter + 1);
            lv_field_name_entry_UOM = 'MDI_entry_UOM' + (lv_counter + 1);
            lv_field_name_material_movement_type = 'MDI_material_movement_type' + (lv_counter + 1);
            lv_field_name_item_text = 'MDI_item_text' + (lv_counter + 1);
            lv_field_name_purchase_order = 'MDI_purchase_order' + (lv_counter + 1);
            lv_field_name_purchase_order_item = 'MDI_purchase_order_item' + (lv_counter + 1);
            lv_field_name_sales_order = 'MDI_sales_order' + (lv_counter + 1);
            lv_field_name_sales_order_item = 'MDI_sales_order_item' + (lv_counter + 1);            
            lv_field_name_material_document_reverse = 'MDI_material_document_reverse' + (lv_counter + 1);
            lv_field_name_fiscal_year_reverse = 'MDI_fiscal_year_reverse' + (lv_counter + 1); 
            lv_field_name_item_reverse = 'MDI_item_reverse' + (lv_counter + 1);
            lv_field_name_system_field_message_type = 'MDI_system_field_message_type'  + (lv_counter + 1);
            lv_field_name_system_field_message_description = 'MDI_system_field_message_description'   + (lv_counter + 1);             

            document.getElementById(lv_field_name_material_document).value = it_MDI_output_material_document_item[lv_counter].material_document;
            document.getElementById(lv_field_name_fiscal_year).value = it_MDI_output_material_document_item[lv_counter].fiscal_year;
            document.getElementById(lv_field_name_item).value = it_MDI_output_material_document_item[lv_counter].item;
            document.getElementById(lv_field_name_material).value = it_MDI_output_material_document_item[lv_counter].material;
            document.getElementById(lv_field_name_plant).value = it_MDI_output_material_document_item[lv_counter].plant;
            document.getElementById(lv_field_name_storage_location).value = it_MDI_output_material_document_item[lv_counter].storage_location;
            document.getElementById(lv_field_name_quantity).value = it_MDI_output_material_document_item[lv_counter].quantity;
            document.getElementById(lv_field_name_entry_UOM).value = it_MDI_output_material_document_item[lv_counter].entry_UOM;
            document.getElementById(lv_field_name_material_movement_type).value = it_MDI_output_material_document_item[lv_counter].material_movement_type;
            document.getElementById(lv_field_name_item_text).value = it_MDI_output_material_document_item[lv_counter].item_text;
            document.getElementById(lv_field_name_purchase_order).value = it_MDI_output_material_document_item[lv_counter].purchase_order;
            document.getElementById(lv_field_name_purchase_order_item).value = it_MDI_output_material_document_item[lv_counter].purchase_order_item;
            document.getElementById(lv_field_name_sales_order).value = it_MDI_output_material_document_item[lv_counter].sales_order;
            document.getElementById(lv_field_name_sales_order_item).value = it_MDI_output_material_document_item[lv_counter].sales_order_item;
            document.getElementById(lv_field_name_material_document_reverse).value = it_MDI_output_material_document_item[lv_counter].material_document_reverse;
            document.getElementById(lv_field_name_fiscal_year_reverse).value = it_MDI_output_material_document_item[lv_counter].fiscal_year_reverse;
            document.getElementById(lv_field_name_item_reverse).value = it_MDI_output_material_document_item[lv_counter].item_reverse;
            document.getElementById(lv_field_name_system_field_message_type).value = it_MDI_output_material_document_item[lv_counter].system_field_message_type;
            document.getElementById(lv_field_name_system_field_message_description).value = it_MDI_output_material_document_item[lv_counter].system_field_message_description;
            
            if (document.getElementById(lv_field_name_system_field_message_type).value == 'ERROR')
            {
                document.getElementById(lv_field_name_material_document).style.color = 'red';
            }
            else        
            {
                document.getElementById(lv_field_name_material_document).style.color = '';
            }            
        }
    }
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function submitForm(event){
    event.preventDefault();
//    console.log(lt_MG_input_material_general[1].material_description.value);
}

