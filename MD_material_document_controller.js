
//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
var lt_MDH_material_document_header = 
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

var lt_MDH_input_material_document_header = 
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

var lt_MDH_output_material_document_header = 
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


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
var lt_MDI_material_document_item = 
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
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
    }
];

var lt_MDI_input_material_document_item = 
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
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
    }
];

var lt_MDI_output_material_document_item = 
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
        material_document_reverse : '',
        fiscal_year_reverse : '',
        item_reverse : '',
        system_field_message_type : '',
        system_field_message_description : ''
    }
];


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_create_controller()
{
    MD_set_field_property_C();
    MD_copy_screen_input_C();
    MD_create_model(lt_MDH_input_material_document_header, lt_MDI_input_material_document_item);
    MD_copy_output_screen_C();

    console.log('lt_MDH_input_material_document_header'); console.log(lt_MDH_input_material_document_header); 
    console.log('lt_MDH_material_document_header'); console.log(lt_MDH_material_document_header); 
    console.log('lt_MDH_output_material_document_header'); console.log(lt_MDH_output_material_document_header); 
    console.log('lt_MDI_input_material_document_item'); console.log(lt_MDI_input_material_document_item); 
    console.log('lt_MDI_material_document_item'); console.log(lt_MDI_material_document_item); 
    console.log('lt_MDI_output_material_document_item'); console.log(lt_MDI_output_material_document_item);     
}


//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_read_controller()
{
    MD_set_field_property_R();
    MD_copy_screen_input_R();
    MD_read_model(lt_MDH_input_material_document_header, lt_MDI_input_material_document_item);
    MD_copy_output_screen_R();

    console.log('lt_MDH_input_material_document_header'); console.log(lt_MDH_input_material_document_header); 
    console.log('lt_MDH_material_document_header'); console.log(lt_MDH_material_document_header); 
    console.log('lt_MDH_output_material_document_header'); console.log(lt_MDH_output_material_document_header); 
    console.log('lt_MDI_input_material_document_item'); console.log(lt_MDI_input_material_document_item); 
    console.log('lt_MDI_material_document_item'); console.log(lt_MDI_material_document_item); 
    console.log('lt_MDI_output_material_document_item'); console.log(lt_MDI_output_material_document_item);     
}



//--------------------------------------------------------------------------------------------------------------------//
// Version 20240700
//--------------------------------------------------------------------------------------------------------------------//
function MD_update_controller()
{
    MD_set_field_property_U();
    MD_copy_screen_input_U();
    MD_update_model(lt_MDH_input_material_document_header, lt_MDI_input_material_document_item);
    MD_copy_output_screen_U();

    console.log('lt_MDH_input_material_document_header'); console.log(lt_MDH_input_material_document_header); 
    console.log('lt_MDH_material_document_header'); console.log(lt_MDH_material_document_header); 
    console.log('lt_MDH_output_material_document_header'); console.log(lt_MDH_output_material_document_header); 
    console.log('lt_MDI_input_material_document_item'); console.log(lt_MDI_input_material_document_item); 
    console.log('lt_MDI_material_document_item'); console.log(lt_MDI_material_document_item); 
    console.log('lt_MDI_output_material_document_item'); console.log(lt_MDI_output_material_document_item);     
}