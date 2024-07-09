/*
    check child_D
*/

//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
var lt_MD_material_document_header = [
    {
    tenant : '',
    material_document : '',
    fiscal_year : '',
    material_document_type : '',
    document_date : '',
    posting_date : '',
    header_reference : '',
    header_text : '',    
    system_field_message_type : '',
    system_field_message_description : ''
    }
];

var lt_MD_input_material_document_header = [
    {
    tenant : '',
    material_document : '',
    fiscal_year : '',
    material_document_type : '',
    document_date : '',
    posting_date : '',
    header_reference : '',
    header_text : '',    
    system_field_message_type : '',
    system_field_message_description : ''
    }
];

var lt_MD_output_material_document_header = [
    {
    tenant : '',
    material_document : '',
    fiscal_year : '',
    material_document_type : '',
    document_date : '',
    posting_date : '',
    header_reference : '',
    header_text : '',    
    system_field_message_type : '',
    system_field_message_description : ''
    }
];

//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
var lt_MD_material_document_item = [
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
    material_movment_type : '',
    item_text : '',
    system_field_message_type : '',
    system_field_message_description : ''
    }
];

var lt_MD_input_material_document_item = [
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
    material_movment_type : '',
    item_text : '',
    system_field_message_type : '',
    system_field_message_description : ''
    }
];

var lt_MD_output_material_document_item = [
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
    material_movment_type : '',
    item_text : '',
    system_field_message_type : '',
    system_field_message_description : ''
    }
];


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MDH_set_material_document_header_hide()
{
    document.getElementById('t_MDH_material_document_header').style.display = "none";
    document.getElementById('b_MDH_set_material_document_header_hide').disabled = true;
    document.getElementById('b_MDH_set_material_document_header_unhide').disabled = false;
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MDH_set_material_document_header_unhide()
{
    document.getElementById('t_MDH_material_document_header').style.display = "table";
    document.getElementById('b_MDH_set_material_document_header_hide').disabled = false;
    document.getElementById('b_MDH_set_material_document_header_unhide').disabled = true;
}



//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MDI_set_material_document_item_hide()
{
    document.getElementById('t_MDI_material_docuemnt_item').style.display = "none";
    document.getElementById('b_MDI_set_material_docuemnt_item_hide').disabled = true;
    document.getElementById('b_MDI_set_material_docuemnt_item_unhide').disabled = false;
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MD_set_material_document_item_unhide()
{
    document.getElementById('t_MDI_material_docuemnt_item').style.display = "table";
    document.getElementById('b_MDI_set_material_docuemnt_item_hide').disabled = false;
    document.getElementById('b_MDI_set_material_docuemnt_item_unhide').disabled = true;
}






//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MP_set_material_plant_hide()
{
    document.getElementById('t_MP_material_plant').style.display = "none";
    document.getElementById('b_MP_material_plant_hide').disabled = true;
    document.getElementById('b_MP_material_plant_unhide').disabled = false;
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MP_set_material_plant_unhide()
{
    document.getElementById('t_MP_material_plant').style.display = "table";
    document.getElementById('b_MP_material_plant_hide').disabled = false;
    document.getElementById('b_MP_material_plant_unhide').disabled = true;
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MSL_set_material_storage_location_hide()
{
    document.getElementById('t_MSL_material_storage_location').style.display = "none";
    document.getElementById('b_MP_material_storage_location_hide').disabled = true;
    document.getElementById('b_MP_material_storage_location_unhide').disabled = false;
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function MSL_set_material_storage_location_unhide()
{
    document.getElementById('t_MSL_material_storage_location').style.display = "table";
    document.getElementById('b_MP_material_storage_location_hide').disabled = false;
    document.getElementById('b_MP_material_storage_location_unhide').disabled = true;
}



//----------------------------------------------------------------------------//

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




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_set_field_property_C()
{
    var MDH_material_document1 = document.getElementById("MDH_material_document1");
    MDH_material_document1.disabled = false;
    var MDH_fiscal_year1 = document.getElementById("MDH_fiscal_year1");
    MDH_fiscal_year1.disabled = false;
    var MDH_material_document_type1 = document.getElementById("MDH_material_document_type1");
    MDH_material_document_type1.disabled = false;
    var MDH_document_date1 = document.getElementById("MDH_document_date1");
    MDH_document_date1.disabled = false;  
    var MDH_posting_date1 = document.getElementById("MDH_posting_date1");
    MDH_posting_date1.disabled = false; 
    var MDH_header_reference1 = document.getElementById("MDH_header_reference1");
    MDH_header_reference1.disabled = false;
    var MDH_header_text1 = document.getElementById("MDH_header_text1");
    MDH_header_text1.disabled = false;      
    
    var MDH_material_document2 = document.getElementById("MDH_material_document2");
    MDH_material_document2.disabled = false;
    var MDH_fiscal_year2 = document.getElementById("MDH_fiscal_year2");
    MDH_fiscal_year2.disabled = false;
    var MDH_material_document_type2 = document.getElementById("MDH_material_document_type2");
    MDH_material_document_type2.disabled = false;
    var MDH_document_date2 = document.getElementById("MDH_document_date2");
    MDH_document_date2.disabled = false;  
    var MDH_posting_date2 = document.getElementById("MDH_posting_date2");
    MDH_posting_date2.disabled = false;
    var MDH_header_reference2 = document.getElementById("MDH_header_reference2");
    MDH_header_reference2.disabled = false;    
    var MDH_header_text2 = document.getElementById("MDH_header_text2");
    MDH_header_text2.disabled = false;       
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_set_field_property_C()
{
    var MDI_material_document1 = document.getElementById("MDI_material_document1");
    MDI_material_document1.disabled = false;
    var MDI_fiscal_year1 = document.getElementById("MDI_fiscal_year1");
    MDI_fiscal_year1.disabled = false;
    var MDI_item1 = document.getElementById("MDI_item1");
    MDI_item1.disabled = false;
    var MDI_material1 = document.getElementById("MDI_material1");
    MDI_material1.disabled = false;  
    var MDI_plant1 = document.getElementById("MDI_plant1");
    MDI_plant1.disabled = false;
    var MDI_storage_location1 = document.getElementById("MDI_storage_location1");
    MDI_storage_location1.disabled = false;  
    var MDI_quantity1 = document.getElementById("MDI_quantity1");
    MDI_quantity1.disabled = false;  
    var MDI_entry_UOM1 = document.getElementById("MDI_entry_UOM1");
    MDI_entry_UOM1.disabled = false;
    var MDI_material_movement_type1 = document.getElementById("MDI_material_movement_type1");
    MDI_material_movement_type1.disabled = false;
    var MDI_item_text1 = document.getElementById("MDI_item_text1");
    MDI_item_text1.disabled = false;
    
    var MDI_material_document2 = document.getElementById("MDI_material_document2");
    MDI_material_document2.disabled = false;
    var MDI_fiscal_year2 = document.getElementById("MDI_fiscal_year2");
    MDI_fiscal_year2.disabled = false;
    var MDI_item2 = document.getElementById("MDI_item2");
    MDI_item2.disabled = false;
    var MDI_material2 = document.getElementById("MDI_material2");
    MDI_material2.disabled = false;  
    var MDI_plant2 = document.getElementById("MDI_plant2");
    MDI_plant2.disabled = false;
    var MDI_storage_location2 = document.getElementById("MDI_storage_location2");
    MDI_storage_location2.disabled = false;  
    var MDI_quantity2 = document.getElementById("MDI_quantity2");
    MDI_quantity2.disabled = false;  
    var MDI_entry_UOM2 = document.getElementById("MDI_entry_UOM2");
    MDI_entry_UOM2.disabled = false;
    var MDI_material_movement_type2 = document.getElementById("MDI_material_movement_type2");
    MDI_material_movement_type2.disabled = false;
    var MDI_item_text2 = document.getElementById("MDI_item_text2");
    MDI_item_text2.disabled = false;  
    
    var MDI_material_document3 = document.getElementById("MDI_material_document3");
    MDI_material_document3.disabled = false;
    var MDI_fiscal_year3 = document.getElementById("MDI_fiscal_year3");
    MDI_fiscal_year3.disabled = false;
    var MDI_item3 = document.getElementById("MDI_item3");
    MDI_item3.disabled = false;
    var MDI_material3 = document.getElementById("MDI_material3");
    MDI_material3.disabled = false;  
    var MDI_plant3 = document.getElementById("MDI_plant3");
    MDI_plant3.disabled = false;
    var MDI_storage_location3 = document.getElementById("MDI_storage_location3");
    MDI_storage_location3.disabled = false;  
    var MDI_quantity3 = document.getElementById("MDI_quantity3");
    MDI_quantity3.disabled = false;  
    var MDI_entry_UOM3 = document.getElementById("MDI_entry_UOM3");
    MDI_entry_UOM3.disabled = false;
    var MDI_material_movement_type3 = document.getElementById("MDI_material_movement_type3");
    MDI_material_movement_type3.disabled = false;
    var MDI_item_text3 = document.getElementById("MDI_item_text3");
    MDI_item_text3.disabled = false;  
    
    var MDI_material_document4 = document.getElementById("MDI_material_document4");
    MDI_material_document4.disabled = false;
    var MDI_fiscal_year4 = document.getElementById("MDI_fiscal_year4");
    MDI_fiscal_year4.disabled = false;
    var MDI_item4 = document.getElementById("MDI_item4");
    MDI_item4.disabled = false;
    var MDI_material4 = document.getElementById("MDI_material4");
    MDI_material4.disabled = false;  
    var MDI_plant4 = document.getElementById("MDI_plant4");
    MDI_plant4.disabled = false;
    var MDI_storage_location4 = document.getElementById("MDI_storage_location4");
    MDI_storage_location4.disabled = false;  
    var MDI_quantity4 = document.getElementById("MDI_quantity4");
    MDI_quantity4.disabled = false;  
    var MDI_entry_UOM4 = document.getElementById("MDI_entry_UOM4");
    MDI_entry_UOM4.disabled = false;
    var MDI_material_movement_type4 = document.getElementById("MDI_material_movement_type4");
    MDI_material_movement_type4.disabled = false;
    var MDI_item_text4 = document.getElementById("MDI_item_text4");
    MDI_item_text4.disabled = false;  
    
    var MDI_material_document5 = document.getElementById("MDI_material_document5");
    MDI_material_document5.disabled = false;
    var MDI_fiscal_year5 = document.getElementById("MDI_fiscal_year5");
    MDI_fiscal_year5.disabled = false;
    var MDI_item5 = document.getElementById("MDI_item5");
    MDI_item5.disabled = false;
    var MDI_material5 = document.getElementById("MDI_material5");
    MDI_material5.disabled = false;  
    var MDI_plant5 = document.getElementById("MDI_plant5");
    MDI_plant5.disabled = false;
    var MDI_storage_location5 = document.getElementById("MDI_storage_location5");
    MDI_storage_location5.disabled = false;  
    var MDI_quantity5 = document.getElementById("MDI_quantity5");
    MDI_quantity5.disabled = false;  
    var MDI_entry_UOM5 = document.getElementById("MDI_entry_UOM5");
    MDI_entry_UOM5.disabled = false;
    var MDI_material_movement_type5 = document.getElementById("MDI_material_movement_type5");
    MDI_material_movement_type5.disabled = false;
    var MDI_item_text5 = document.getElementById("MDI_item_text5");
    MDI_item_text5.disabled = false;  
    
    var MDI_material_document6 = document.getElementById("MDI_material_document6");
    MDI_material_document6.disabled = false;
    var MDI_fiscal_year6 = document.getElementById("MDI_fiscal_year6");
    MDI_fiscal_year6.disabled = false;
    var MDI_item6 = document.getElementById("MDI_item6");
    MDI_item6.disabled = false;
    var MDI_material6 = document.getElementById("MDI_material6");
    MDI_material6.disabled = false;  
    var MDI_plant6 = document.getElementById("MDI_plant6");
    MDI_plant6.disabled = false;
    var MDI_storage_location6 = document.getElementById("MDI_storage_location6");
    MDI_storage_location6.disabled = false;  
    var MDI_quantity6 = document.getElementById("MDI_quantity6");
    MDI_quantity6.disabled = false;  
    var MDI_entry_UOM6 = document.getElementById("MDI_entry_UOM6");
    MDI_entry_UOM6.disabled = false;
    var MDI_material_movement_type6 = document.getElementById("MDI_material_movement_type6");
    MDI_material_movement_type6.disabled = false;
    var MDI_item_text6 = document.getElementById("MDI_item_text6");
    MDI_item_text6.disabled = false;  
    
    var MDI_material_document7 = document.getElementById("MDI_material_document7");
    MDI_material_document7.disabled = false;
    var MDI_fiscal_year7 = document.getElementById("MDI_fiscal_year7");
    MDI_fiscal_year7.disabled = false;
    var MDI_item7 = document.getElementById("MDI_item7");
    MDI_item7.disabled = false;
    var MDI_material7 = document.getElementById("MDI_material7");
    MDI_material7.disabled = false;  
    var MDI_plant7 = document.getElementById("MDI_plant7");
    MDI_plant7.disabled = false;
    var MDI_storage_location7 = document.getElementById("MDI_storage_location7");
    MDI_storage_location7.disabled = false;  
    var MDI_quantity7 = document.getElementById("MDI_quantity7");
    MDI_quantity7.disabled = false;  
    var MDI_entry_UOM7 = document.getElementById("MDI_entry_UOM7");
    MDI_entry_UOM7.disabled = false;
    var MDI_material_movement_type7 = document.getElementById("MDI_material_movement_type7");
    MDI_material_movement_type7.disabled = false;
    var MDI_item_text7 = document.getElementById("MDI_item_text7");
    MDI_item_text7.disabled = false;  
    
    var MDI_material_document8 = document.getElementById("MDI_material_document8");
    MDI_material_document8.disabled = false;
    var MDI_fiscal_year8 = document.getElementById("MDI_fiscal_year8");
    MDI_fiscal_year8.disabled = false;
    var MDI_item8 = document.getElementById("MDI_item8");
    MDI_item8.disabled = false;
    var MDI_material8 = document.getElementById("MDI_material8");
    MDI_material8.disabled = false;  
    var MDI_plant8 = document.getElementById("MDI_plant8");
    MDI_plant8.disabled = false;
    var MDI_storage_location8 = document.getElementById("MDI_storage_location8");
    MDI_storage_location8.disabled = false;  
    var MDI_quantity8 = document.getElementById("MDI_quantity8");
    MDI_quantity8.disabled = false;  
    var MDI_entry_UOM8 = document.getElementById("MDI_entry_UOM8");
    MDI_entry_UOM8.disabled = false;
    var MDI_material_movement_type8 = document.getElementById("MDI_material_movement_type8");
    MDI_material_movement_type8.disabled = false;
    var MDI_item_text8 = document.getElementById("MDI_item_text8");
    MDI_item_text8.disabled = false;      
}    




//----------------------------------------------------------------------------//

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



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_set_field_property_R()
{
    var MDH_material_document1 = document.getElementById("MDH_material_document1");
    MDH_material_document1.disabled = false;
    var MDH_fiscal_year1 = document.getElementById("MDH_fiscal_year1");
    MDH_fiscal_year1.disabled = false;
    var MDH_material_document_type1 = document.getElementById("MDH_material_document_type1");
    MDH_material_document_type1.disabled = true;
    var MDH_document_date1 = document.getElementById("MDH_document_date1");
    MDH_document_date1.disabled = true;  
    var MDH_posting_date1 = document.getElementById("MDH_posting_date1");
    MDH_posting_date1.disabled = true;
    var MDH_header_reference1 = document.getElementById("MDH_header_reference1");
    MDH_header_reference1.disabled = true;
    var MDH_header_text1 = document.getElementById("MDH_header_text1");
    MDH_header_text1.disabled = true;       
    
    var MDH_material_document2 = document.getElementById("MDH_material_document2");
    MDH_material_document2.disabled = false;
    var MDH_fiscal_year2 = document.getElementById("MDH_fiscal_year2");
    MDH_fiscal_year2.disabled = false;
    var MDH_material_document_type2 = document.getElementById("MDH_material_document_type2");
    MDH_material_document_type2.disabled = true;
    var MDH_document_date2 = document.getElementById("MDH_document_date2");
    MDH_document_date2.disabled = true;  
    var MDH_posting_date2 = document.getElementById("MDH_posting_date2");
    MDH_posting_date2.disabled = true; 
    var MDH_header_reference2 = document.getElementById("MDH_header_reference2");
    MDH_header_reference2.disabled = true;
    var MDH_header_text2 = document.getElementById("MDH_header_text2");
    MDH_header_text2.disabled = true;          

}    



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_set_field_property_R()
{
    var MDI_material_document1 = document.getElementById("MDI_material_document1");
    MDI_material_document1.disabled = false;
    var MDI_fiscal_year1 = document.getElementById("MDI_fiscal_year1");
    MDI_fiscal_year1.disabled = false;
    var MDI_item1 = document.getElementById("MDI_item1");
    MDI_item1.disabled = false;
    var MDI_material1 = document.getElementById("MDI_material1");
    MDI_material1.disabled = true;  
    var MDI_plant1 = document.getElementById("MDI_plant1");
    MDI_plant1.disabled = true;
    var MDI_storage_location1 = document.getElementById("MDI_storage_location1");
    MDI_storage_location1.disabled = true;  
    var MDI_quantity1 = document.getElementById("MDI_quantity1");
    MDI_quantity1.disabled = true;  
    var MDI_entry_UOM1 = document.getElementById("MDI_entry_UOM1");
    MDI_entry_UOM1.disabled = true;
    var MDI_material_movement_type1 = document.getElementById("MDI_material_movement_type1");
    MDI_material_movement_type1.disabled = true;
    var MDI_item_text1 = document.getElementById("MDI_item_text1");
    MDI_item_text1.disabled = true;
    
    var MDI_material_document2 = document.getElementById("MDI_material_document2");
    MDI_material_document2.disabled = false;
    var MDI_fiscal_year2 = document.getElementById("MDI_fiscal_year2");
    MDI_fiscal_year2.disabled = false;
    var MDI_item2 = document.getElementById("MDI_item2");
    MDI_item2.disabled = false;
    var MDI_material2 = document.getElementById("MDI_material2");
    MDI_material2.disabled = true;  
    var MDI_plant2 = document.getElementById("MDI_plant2");
    MDI_plant2.disabled = true;
    var MDI_storage_location2 = document.getElementById("MDI_storage_location2");
    MDI_storage_location2.disabled = true;  
    var MDI_quantity2 = document.getElementById("MDI_quantity2");
    MDI_quantity2.disabled = true;  
    var MDI_entry_UOM2 = document.getElementById("MDI_entry_UOM2");
    MDI_entry_UOM2.disabled = true;
    var MDI_material_movement_type2 = document.getElementById("MDI_material_movement_type2");
    MDI_material_movement_type2.disabled = true;
    var MDI_item_text2 = document.getElementById("MDI_item_text2");
    MDI_item_text2.disabled = true;  
    
    var MDI_material_document3 = document.getElementById("MDI_material_document3");
    MDI_material_document3.disabled = false;
    var MDI_fiscal_year3 = document.getElementById("MDI_fiscal_year3");
    MDI_fiscal_year3.disabled = false;
    var MDI_item3 = document.getElementById("MDI_item3");
    MDI_item3.disabled = false;
    var MDI_material3 = document.getElementById("MDI_material3");
    MDI_material3.disabled = true;  
    var MDI_plant3 = document.getElementById("MDI_plant3");
    MDI_plant3.disabled = true;
    var MDI_storage_location3 = document.getElementById("MDI_storage_location3");
    MDI_storage_location3.disabled = true;  
    var MDI_quantity3 = document.getElementById("MDI_quantity3");
    MDI_quantity3.disabled = true;  
    var MDI_entry_UOM3 = document.getElementById("MDI_entry_UOM3");
    MDI_entry_UOM3.disabled = true;
    var MDI_material_movement_type3 = document.getElementById("MDI_material_movement_type3");
    MDI_material_movement_type3.disabled = true;
    var MDI_item_text3 = document.getElementById("MDI_item_text3");
    MDI_item_text3.disabled = true;  
    
    var MDI_material_document4 = document.getElementById("MDI_material_document4");
    MDI_material_document4.disabled = false;
    var MDI_fiscal_year4 = document.getElementById("MDI_fiscal_year4");
    MDI_fiscal_year4.disabled = false;
    var MDI_item4 = document.getElementById("MDI_item4");
    MDI_item4.disabled = false;
    var MDI_material4 = document.getElementById("MDI_material4");
    MDI_material4.disabled = true;  
    var MDI_plant4 = document.getElementById("MDI_plant4");
    MDI_plant4.disabled = true;
    var MDI_storage_location4 = document.getElementById("MDI_storage_location4");
    MDI_storage_location4.disabled = true;  
    var MDI_quantity4 = document.getElementById("MDI_quantity4");
    MDI_quantity4.disabled = true;  
    var MDI_entry_UOM4 = document.getElementById("MDI_entry_UOM4");
    MDI_entry_UOM4.disabled = true;
    var MDI_material_movement_type4 = document.getElementById("MDI_material_movement_type4");
    MDI_material_movement_type4.disabled = true;
    var MDI_item_text4 = document.getElementById("MDI_item_text4");
    MDI_item_text4.disabled = true;  
    
    var MDI_material_document5 = document.getElementById("MDI_material_document5");
    MDI_material_document5.disabled = false;
    var MDI_fiscal_year5 = document.getElementById("MDI_fiscal_year5");
    MDI_fiscal_year5.disabled = false;
    var MDI_item5 = document.getElementById("MDI_item5");
    MDI_item5.disabled = false;
    var MDI_material5 = document.getElementById("MDI_material5");
    MDI_material5.disabled = true;  
    var MDI_plant5 = document.getElementById("MDI_plant5");
    MDI_plant5.disabled = true;
    var MDI_storage_location5 = document.getElementById("MDI_storage_location5");
    MDI_storage_location5.disabled = true;  
    var MDI_quantity5 = document.getElementById("MDI_quantity5");
    MDI_quantity5.disabled = true;  
    var MDI_entry_UOM5 = document.getElementById("MDI_entry_UOM5");
    MDI_entry_UOM5.disabled = true;
    var MDI_material_movement_type5 = document.getElementById("MDI_material_movement_type5");
    MDI_material_movement_type5.disabled = true;
    var MDI_item_text5 = document.getElementById("MDI_item_text5");
    MDI_item_text5.disabled = true;  
    
    var MDI_material_document6 = document.getElementById("MDI_material_document6");
    MDI_material_document6.disabled = false;
    var MDI_fiscal_year6 = document.getElementById("MDI_fiscal_year6");
    MDI_fiscal_year6.disabled = false;
    var MDI_item6 = document.getElementById("MDI_item6");
    MDI_item6.disabled = false;
    var MDI_material6 = document.getElementById("MDI_material6");
    MDI_material6.disabled = true;  
    var MDI_plant6 = document.getElementById("MDI_plant6");
    MDI_plant6.disabled = true;
    var MDI_storage_location6 = document.getElementById("MDI_storage_location6");
    MDI_storage_location6.disabled = true;  
    var MDI_quantity6 = document.getElementById("MDI_quantity6");
    MDI_quantity6.disabled = true;  
    var MDI_entry_UOM6 = document.getElementById("MDI_entry_UOM6");
    MDI_entry_UOM6.disabled = true;
    var MDI_material_movement_type6 = document.getElementById("MDI_material_movement_type6");
    MDI_material_movement_type6.disabled = true;
    var MDI_item_text6 = document.getElementById("MDI_item_text6");
    MDI_item_text6.disabled = true;  
    
    var MDI_material_document7 = document.getElementById("MDI_material_document7");
    MDI_material_document7.disabled = false;
    var MDI_fiscal_year7 = document.getElementById("MDI_fiscal_year7");
    MDI_fiscal_year7.disabled = false;
    var MDI_item7 = document.getElementById("MDI_item7");
    MDI_item7.disabled = false;
    var MDI_material7 = document.getElementById("MDI_material7");
    MDI_material7.disabled = true;  
    var MDI_plant7 = document.getElementById("MDI_plant7");
    MDI_plant7.disabled = true;
    var MDI_storage_location7 = document.getElementById("MDI_storage_location7");
    MDI_storage_location7.disabled = true;  
    var MDI_quantity7 = document.getElementById("MDI_quantity7");
    MDI_quantity7.disabled = true;  
    var MDI_entry_UOM7 = document.getElementById("MDI_entry_UOM7");
    MDI_entry_UOM7.disabled = true;
    var MDI_material_movement_type7 = document.getElementById("MDI_material_movement_type7");
    MDI_material_movement_type7.disabled = true;
    var MDI_item_text7 = document.getElementById("MDI_item_text7");
    MDI_item_text7.disabled = true;  
    
    var MDI_material_document8 = document.getElementById("MDI_material_document8");
    MDI_material_document8.disabled = false;
    var MDI_fiscal_year8 = document.getElementById("MDI_fiscal_year8");
    MDI_fiscal_year8.disabled = false;
    var MDI_item8 = document.getElementById("MDI_item8");
    MDI_item8.disabled = false;
    var MDI_material8 = document.getElementById("MDI_material8");
    MDI_material8.disabled = true;  
    var MDI_plant8 = document.getElementById("MDI_plant8");
    MDI_plant8.disabled = true;
    var MDI_storage_location8 = document.getElementById("MDI_storage_location8");
    MDI_storage_location8.disabled = true;  
    var MDI_quantity8 = document.getElementById("MDI_quantity8");
    MDI_quantity8.disabled = true;  
    var MDI_entry_UOM8 = document.getElementById("MDI_entry_UOM8");
    MDI_entry_UOM8.disabled = true;
    var MDI_material_movement_type8 = document.getElementById("MDI_material_movement_type8");
    MDI_material_movement_type8.disabled = true;
    var MDI_item_text8 = document.getElementById("MDI_item_text8");
    MDI_item_text8.disabled = true;      
}    



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
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




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_set_field_property_U()
{
    var MDH_material_document1 = document.getElementById("MDH_material_document1");
    MDH_material_document1.disabled = false;
    var MDH_fiscal_year1 = document.getElementById("MDH_fiscal_year1");
    MDH_fiscal_year1.disabled = false;
    var MDH_material_document_type1 = document.getElementById("MDH_material_document_type1");
    MDH_material_document_type1.disabled = true;
    var MDH_document_date1 = document.getElementById("MDH_document_date1");
    MDH_document_date1.disabled = true;  
    var MDH_posting_date1 = document.getElementById("MDH_posting_date1");
    MDH_posting_date1.disabled = true; 
    var MDH_header_reference1 = document.getElementById("MDH_header_reference1");
    MDH_header_reference1.disabled = false;
    var MDH_header_text1 = document.getElementById("MDH_header_text1");
    MDH_header_text1.disabled = false;      
    
    var MDH_material_document2 = document.getElementById("MDH_material_document2");
    MDH_material_document2.disabled = false;
    var MDH_fiscal_year2 = document.getElementById("MDH_fiscal_year2");
    MDH_fiscal_year2.disabled = false;
    var MDH_material_document_type2 = document.getElementById("MDH_material_document_type2");
    MDH_material_document_type2.disabled = true;
    var MDH_document_date2 = document.getElementById("MDH_document_date2");
    MDH_document_date2.disabled = true;  
    var MDH_posting_date2 = document.getElementById("MDH_posting_date2");
    MDH_posting_date2.disabled = true; 
    var MDH_header_reference2 = document.getElementById("MDH_header_reference2");
    MDH_header_reference2.disabled = false;
    var MDH_header_text2 = document.getElementById("MDH_header_text2");
    MDH_header_text2.disabled = false;          
}    



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_set_field_property_U()
{
    var MDI_material_document1 = document.getElementById("MDI_material_document1");
    MDI_material_document1.disabled = false;
    var MDI_fiscal_year1 = document.getElementById("MDI_fiscal_year1");
    MDI_fiscal_year1.disabled = false;
    var MDI_item1 = document.getElementById("MDI_item1");
    MDI_item1.disabled = false;
    var MDI_material1 = document.getElementById("MDI_material1");
    MDI_material1.disabled = true;  
    var MDI_plant1 = document.getElementById("MDI_plant1");
    MDI_plant1.disabled = true;
    var MDI_storage_location1 = document.getElementById("MDI_storage_location1");
    MDI_storage_location1.disabled = true;  
    var MDI_quantity1 = document.getElementById("MDI_quantity1");
    MDI_quantity1.disabled = true;  
    var MDI_entry_UOM1 = document.getElementById("MDI_entry_UOM1");
    MDI_entry_UOM1.disabled = true;
    var MDI_material_movement_type1 = document.getElementById("MDI_material_movement_type1");
    MDI_material_movement_type1.disabled = true;
    var MDI_item_text1 = document.getElementById("MDI_item_text1");
    MDI_item_text1.disabled = false;
    
    var MDI_material_document2 = document.getElementById("MDI_material_document2");
    MDI_material_document2.disabled = false;
    var MDI_fiscal_year2 = document.getElementById("MDI_fiscal_year2");
    MDI_fiscal_year2.disabled = false;
    var MDI_item2 = document.getElementById("MDI_item2");
    MDI_item2.disabled = false;
    var MDI_material2 = document.getElementById("MDI_material2");
    MDI_material2.disabled = true;  
    var MDI_plant2 = document.getElementById("MDI_plant2");
    MDI_plant2.disabled = true;
    var MDI_storage_location2 = document.getElementById("MDI_storage_location2");
    MDI_storage_location2.disabled = true;  
    var MDI_quantity2 = document.getElementById("MDI_quantity2");
    MDI_quantity2.disabled = true;  
    var MDI_entry_UOM2 = document.getElementById("MDI_entry_UOM2");
    MDI_entry_UOM2.disabled = true;
    var MDI_material_movement_type2 = document.getElementById("MDI_material_movement_type2");
    MDI_material_movement_type2.disabled = true;
    var MDI_item_text2 = document.getElementById("MDI_item_text2");
    MDI_item_text2.disabled = false;  
    
    var MDI_material_document3 = document.getElementById("MDI_material_document3");
    MDI_material_document3.disabled = false;
    var MDI_fiscal_year3 = document.getElementById("MDI_fiscal_year3");
    MDI_fiscal_year3.disabled = false;
    var MDI_item3 = document.getElementById("MDI_item3");
    MDI_item3.disabled = false;
    var MDI_material3 = document.getElementById("MDI_material3");
    MDI_material3.disabled = true;  
    var MDI_plant3 = document.getElementById("MDI_plant3");
    MDI_plant3.disabled = true;
    var MDI_storage_location3 = document.getElementById("MDI_storage_location3");
    MDI_storage_location3.disabled = true;  
    var MDI_quantity3 = document.getElementById("MDI_quantity3");
    MDI_quantity3.disabled = true;  
    var MDI_entry_UOM3 = document.getElementById("MDI_entry_UOM3");
    MDI_entry_UOM3.disabled = true;
    var MDI_material_movement_type3 = document.getElementById("MDI_material_movement_type3");
    MDI_material_movement_type3.disabled = true;
    var MDI_item_text3 = document.getElementById("MDI_item_text3");
    MDI_item_text3.disabled = false;  
    
    var MDI_material_document4 = document.getElementById("MDI_material_document4");
    MDI_material_document4.disabled = false;
    var MDI_fiscal_year4 = document.getElementById("MDI_fiscal_year4");
    MDI_fiscal_year4.disabled = false;
    var MDI_item4 = document.getElementById("MDI_item4");
    MDI_item4.disabled = false;
    var MDI_material4 = document.getElementById("MDI_material4");
    MDI_material4.disabled = true;  
    var MDI_plant4 = document.getElementById("MDI_plant4");
    MDI_plant4.disabled = true;
    var MDI_storage_location4 = document.getElementById("MDI_storage_location4");
    MDI_storage_location4.disabled = true;  
    var MDI_quantity4 = document.getElementById("MDI_quantity4");
    MDI_quantity4.disabled = true;  
    var MDI_entry_UOM4 = document.getElementById("MDI_entry_UOM4");
    MDI_entry_UOM4.disabled = true;
    var MDI_material_movement_type4 = document.getElementById("MDI_material_movement_type4");
    MDI_material_movement_type4.disabled = true;
    var MDI_item_text4 = document.getElementById("MDI_item_text4");
    MDI_item_text4.disabled = false;  
    
    var MDI_material_document5 = document.getElementById("MDI_material_document5");
    MDI_material_document5.disabled = false;
    var MDI_fiscal_year5 = document.getElementById("MDI_fiscal_year5");
    MDI_fiscal_year5.disabled = false;
    var MDI_item5 = document.getElementById("MDI_item5");
    MDI_item5.disabled = false;
    var MDI_material5 = document.getElementById("MDI_material5");
    MDI_material5.disabled = true;  
    var MDI_plant5 = document.getElementById("MDI_plant5");
    MDI_plant5.disabled = true;
    var MDI_storage_location5 = document.getElementById("MDI_storage_location5");
    MDI_storage_location5.disabled = true;  
    var MDI_quantity5 = document.getElementById("MDI_quantity5");
    MDI_quantity5.disabled = true;  
    var MDI_entry_UOM5 = document.getElementById("MDI_entry_UOM5");
    MDI_entry_UOM5.disabled = true;
    var MDI_material_movement_type5 = document.getElementById("MDI_material_movement_type5");
    MDI_material_movement_type5.disabled = true;
    var MDI_item_text5 = document.getElementById("MDI_item_text5");
    MDI_item_text5.disabled = false;  
    
    var MDI_material_document6 = document.getElementById("MDI_material_document6");
    MDI_material_document6.disabled = false;
    var MDI_fiscal_year6 = document.getElementById("MDI_fiscal_year6");
    MDI_fiscal_year6.disabled = false;
    var MDI_item6 = document.getElementById("MDI_item6");
    MDI_item6.disabled = false;
    var MDI_material6 = document.getElementById("MDI_material6");
    MDI_material6.disabled = true;  
    var MDI_plant6 = document.getElementById("MDI_plant6");
    MDI_plant6.disabled = true;
    var MDI_storage_location6 = document.getElementById("MDI_storage_location6");
    MDI_storage_location6.disabled = true;  
    var MDI_quantity6 = document.getElementById("MDI_quantity6");
    MDI_quantity6.disabled = true;  
    var MDI_entry_UOM6 = document.getElementById("MDI_entry_UOM6");
    MDI_entry_UOM6.disabled = true;
    var MDI_material_movement_type6 = document.getElementById("MDI_material_movement_type6");
    MDI_material_movement_type6.disabled = true;
    var MDI_item_text6 = document.getElementById("MDI_item_text6");
    MDI_item_text6.disabled = false;  
    
    var MDI_material_document7 = document.getElementById("MDI_material_document7");
    MDI_material_document7.disabled = false;
    var MDI_fiscal_year7 = document.getElementById("MDI_fiscal_year7");
    MDI_fiscal_year7.disabled = false;
    var MDI_item7 = document.getElementById("MDI_item7");
    MDI_item7.disabled = false;
    var MDI_material7 = document.getElementById("MDI_material7");
    MDI_material7.disabled = true;  
    var MDI_plant7 = document.getElementById("MDI_plant7");
    MDI_plant7.disabled = true;
    var MDI_storage_location7 = document.getElementById("MDI_storage_location7");
    MDI_storage_location7.disabled = true;  
    var MDI_quantity7 = document.getElementById("MDI_quantity7");
    MDI_quantity7.disabled = true;  
    var MDI_entry_UOM7 = document.getElementById("MDI_entry_UOM7");
    MDI_entry_UOM7.disabled = true;
    var MDI_material_movement_type7 = document.getElementById("MDI_material_movement_type7");
    MDI_material_movement_type7.disabled = true;
    var MDI_item_text7 = document.getElementById("MDI_item_text7");
    MDI_item_text7.disabled = false;  
    
    var MDI_material_document8 = document.getElementById("MDI_material_document8");
    MDI_material_document8.disabled = false;
    var MDI_fiscal_year8 = document.getElementById("MDI_fiscal_year8");
    MDI_fiscal_year8.disabled = false;
    var MDI_item8 = document.getElementById("MDI_item8");
    MDI_item8.disabled = false;
    var MDI_material8 = document.getElementById("MDI_material8");
    MDI_material8.disabled = true;  
    var MDI_plant8 = document.getElementById("MDI_plant8");
    MDI_plant8.disabled = true;
    var MDI_storage_location8 = document.getElementById("MDI_storage_location8");
    MDI_storage_location8.disabled = true;  
    var MDI_quantity8 = document.getElementById("MDI_quantity8");
    MDI_quantity8.disabled = true;  
    var MDI_entry_UOM8 = document.getElementById("MDI_entry_UOM8");
    MDI_entry_UOM8.disabled = true;
    var MDI_material_movement_type8 = document.getElementById("MDI_material_movement_type8");
    MDI_material_movement_type8.disabled = true;
    var MDI_item_text8 = document.getElementById("MDI_item_text8");
    MDI_item_text8.disabled = false;      
}    



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
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



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDH_set_field_property_D()
{
    var MDH_material_document1 = document.getElementById("MDH_material_document1");
    MDH_material_document1.disabled = false;
    var MDH_fiscal_year1 = document.getElementById("MDH_fiscal_year1");
    MDH_fiscal_year1.disabled = false;
    var MDH_material_document_type1 = document.getElementById("MDH_material_document_type1");
    MDH_material_document_type1.disabled = true;
    var MDH_document_date1 = document.getElementById("MDH_document_date1");
    MDH_document_date1.disabled = true;  
    var MDH_posting_date1 = document.getElementById("MDH_posting_date1");
    MDH_posting_date1.disabled = true;  
    var MDH_header_reference1 = document.getElementById("MDH_header_reference1");
    MDH_header_reference1.disabled = true; 
    var MDH_header_text1 = document.getElementById("MDH_header_text1");
    MDH_header_text1.disabled = true;    
    
    var MDH_material_document2 = document.getElementById("MDH_material_document2");
    MDH_material_document2.disabled = false;
    var MDH_fiscal_year2 = document.getElementById("MDH_fiscal_year2");
    MDH_fiscal_year2.disabled = false;
    var MDH_material_document_type2 = document.getElementById("MDH_material_document_type2");
    MDH_material_document_type2.disabled = true;
    var MDH_document_date2 = document.getElementById("MDH_document_date2");
    MDH_document_date2.disabled = true;  
    var MDH_posting_date2 = document.getElementById("MDH_posting_date2");
    MDH_posting_date2.disabled = true;  
    var MDH_header_reference2 = document.getElementById("MDH_header_reference2");
    MDH_header_reference2.disabled = true;
    var MDH_header_text2 = document.getElementById("MDH_header_text2");
    MDH_header_text2.disabled = true;         

}    




//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MDI_set_field_property_D()
{
    var MDI_material_document1 = document.getElementById("MDI_material_document1");
    MDI_material_document1.disabled = false;
    var MDI_fiscal_year1 = document.getElementById("MDI_fiscal_year1");
    MDI_fiscal_year1.disabled = false;
    var MDI_item1 = document.getElementById("MDI_item1");
    MDI_item1.disabled = false;
    var MDI_material1 = document.getElementById("MDI_material1");
    MDI_material1.disabled = true;  
    var MDI_plant1 = document.getElementById("MDI_plant1");
    MDI_plant1.disabled = true;
    var MDI_storage_location1 = document.getElementById("MDI_storage_location1");
    MDI_storage_location1.disabled = true;  
    var MDI_quantity1 = document.getElementById("MDI_quantity1");
    MDI_quantity1.disabled = true;  
    var MDI_entry_UOM1 = document.getElementById("MDI_entry_UOM1");
    MDI_entry_UOM1.disabled = true;
    var MDI_material_movement_type1 = document.getElementById("MDI_material_movement_type1");
    MDI_material_movement_type1.disabled = true;
    var MDI_item_text1 = document.getElementById("MDI_item_text1");
    MDI_item_text1.disabled = true;
    
    var MDI_material_document2 = document.getElementById("MDI_material_document2");
    MDI_material_document2.disabled = false;
    var MDI_fiscal_year2 = document.getElementById("MDI_fiscal_year2");
    MDI_fiscal_year2.disabled = false;
    var MDI_item2 = document.getElementById("MDI_item2");
    MDI_item2.disabled = false;
    var MDI_material2 = document.getElementById("MDI_material2");
    MDI_material2.disabled = true;  
    var MDI_plant2 = document.getElementById("MDI_plant2");
    MDI_plant2.disabled = true;
    var MDI_storage_location2 = document.getElementById("MDI_storage_location2");
    MDI_storage_location2.disabled = true;  
    var MDI_quantity2 = document.getElementById("MDI_quantity2");
    MDI_quantity2.disabled = true;  
    var MDI_entry_UOM2 = document.getElementById("MDI_entry_UOM2");
    MDI_entry_UOM2.disabled = true;
    var MDI_material_movement_type2 = document.getElementById("MDI_material_movement_type2");
    MDI_material_movement_type2.disabled = true;
    var MDI_item_text2 = document.getElementById("MDI_item_text2");
    MDI_item_text2.disabled = true;  
    
    var MDI_material_document3 = document.getElementById("MDI_material_document3");
    MDI_material_document3.disabled = false;
    var MDI_fiscal_year3 = document.getElementById("MDI_fiscal_year3");
    MDI_fiscal_year3.disabled = false;
    var MDI_item3 = document.getElementById("MDI_item3");
    MDI_item3.disabled = false;
    var MDI_material3 = document.getElementById("MDI_material3");
    MDI_material3.disabled = true;  
    var MDI_plant3 = document.getElementById("MDI_plant3");
    MDI_plant3.disabled = true;
    var MDI_storage_location3 = document.getElementById("MDI_storage_location3");
    MDI_storage_location3.disabled = true;  
    var MDI_quantity3 = document.getElementById("MDI_quantity3");
    MDI_quantity3.disabled = true;  
    var MDI_entry_UOM3 = document.getElementById("MDI_entry_UOM3");
    MDI_entry_UOM3.disabled = true;
    var MDI_material_movement_type3 = document.getElementById("MDI_material_movement_type3");
    MDI_material_movement_type3.disabled = true;
    var MDI_item_text3 = document.getElementById("MDI_item_text3");
    MDI_item_text3.disabled = true;  
    
    var MDI_material_document4 = document.getElementById("MDI_material_document4");
    MDI_material_document4.disabled = false;
    var MDI_fiscal_year4 = document.getElementById("MDI_fiscal_year4");
    MDI_fiscal_year4.disabled = false;
    var MDI_item4 = document.getElementById("MDI_item4");
    MDI_item4.disabled = false;
    var MDI_material4 = document.getElementById("MDI_material4");
    MDI_material4.disabled = true;  
    var MDI_plant4 = document.getElementById("MDI_plant4");
    MDI_plant4.disabled = true;
    var MDI_storage_location4 = document.getElementById("MDI_storage_location4");
    MDI_storage_location4.disabled = true;  
    var MDI_quantity4 = document.getElementById("MDI_quantity4");
    MDI_quantity4.disabled = true;  
    var MDI_entry_UOM4 = document.getElementById("MDI_entry_UOM4");
    MDI_entry_UOM4.disabled = true;
    var MDI_material_movement_type4 = document.getElementById("MDI_material_movement_type4");
    MDI_material_movement_type4.disabled = true;
    var MDI_item_text4 = document.getElementById("MDI_item_text4");
    MDI_item_text4.disabled = true;  
    
    var MDI_material_document5 = document.getElementById("MDI_material_document5");
    MDI_material_document5.disabled = false;
    var MDI_fiscal_year5 = document.getElementById("MDI_fiscal_year5");
    MDI_fiscal_year5.disabled = false;
    var MDI_item5 = document.getElementById("MDI_item5");
    MDI_item5.disabled = false;
    var MDI_material5 = document.getElementById("MDI_material5");
    MDI_material5.disabled = true;  
    var MDI_plant5 = document.getElementById("MDI_plant5");
    MDI_plant5.disabled = true;
    var MDI_storage_location5 = document.getElementById("MDI_storage_location5");
    MDI_storage_location5.disabled = true;  
    var MDI_quantity5 = document.getElementById("MDI_quantity5");
    MDI_quantity5.disabled = true;  
    var MDI_entry_UOM5 = document.getElementById("MDI_entry_UOM5");
    MDI_entry_UOM5.disabled = true;
    var MDI_material_movement_type5 = document.getElementById("MDI_material_movement_type5");
    MDI_material_movement_type5.disabled = true;
    var MDI_item_text5 = document.getElementById("MDI_item_text5");
    MDI_item_text5.disabled = true;  
    
    var MDI_material_document6 = document.getElementById("MDI_material_document6");
    MDI_material_document6.disabled = false;
    var MDI_fiscal_year6 = document.getElementById("MDI_fiscal_year6");
    MDI_fiscal_year6.disabled = false;
    var MDI_item6 = document.getElementById("MDI_item6");
    MDI_item6.disabled = false;
    var MDI_material6 = document.getElementById("MDI_material6");
    MDI_material6.disabled = true;  
    var MDI_plant6 = document.getElementById("MDI_plant6");
    MDI_plant6.disabled = true;
    var MDI_storage_location6 = document.getElementById("MDI_storage_location6");
    MDI_storage_location6.disabled = true;  
    var MDI_quantity6 = document.getElementById("MDI_quantity6");
    MDI_quantity6.disabled = true;  
    var MDI_entry_UOM6 = document.getElementById("MDI_entry_UOM6");
    MDI_entry_UOM6.disabled = true;
    var MDI_material_movement_type6 = document.getElementById("MDI_material_movement_type6");
    MDI_material_movement_type6.disabled = true;
    var MDI_item_text6 = document.getElementById("MDI_item_text6");
    MDI_item_text6.disabled = true;  
    
    var MDI_material_document7 = document.getElementById("MDI_material_document7");
    MDI_material_document7.disabled = false;
    var MDI_fiscal_year7 = document.getElementById("MDI_fiscal_year7");
    MDI_fiscal_year7.disabled = false;
    var MDI_item7 = document.getElementById("MDI_item7");
    MDI_item7.disabled = false;
    var MDI_material7 = document.getElementById("MDI_material7");
    MDI_material7.disabled = true;  
    var MDI_plant7 = document.getElementById("MDI_plant7");
    MDI_plant7.disabled = true;
    var MDI_storage_location7 = document.getElementById("MDI_storage_location7");
    MDI_storage_location7.disabled = true;  
    var MDI_quantity7 = document.getElementById("MDI_quantity7");
    MDI_quantity7.disabled = true;  
    var MDI_entry_UOM7 = document.getElementById("MDI_entry_UOM7");
    MDI_entry_UOM7.disabled = true;
    var MDI_material_movement_type7 = document.getElementById("MDI_material_movement_type7");
    MDI_material_movement_type7.disabled = true;
    var MDI_item_text7 = document.getElementById("MDI_item_text7");
    MDI_item_text7.disabled = true;  
    
    var MDI_material_document8 = document.getElementById("MDI_material_document8");
    MDI_material_document8.disabled = false;
    var MDI_fiscal_year8 = document.getElementById("MDI_fiscal_year8");
    MDI_fiscal_year8.disabled = false;
    var MDI_item8 = document.getElementById("MDI_item8");
    MDI_item8.disabled = false;
    var MDI_material8 = document.getElementById("MDI_material8");
    MDI_material8.disabled = true;  
    var MDI_plant8 = document.getElementById("MDI_plant8");
    MDI_plant8.disabled = true;
    var MDI_storage_location8 = document.getElementById("MDI_storage_location8");
    MDI_storage_location8.disabled = true;  
    var MDI_quantity8 = document.getElementById("MDI_quantity8");
    MDI_quantity8.disabled = true;  
    var MDI_entry_UOM8 = document.getElementById("MDI_entry_UOM8");
    MDI_entry_UOM8.disabled = true;
    var MDI_material_movement_type8 = document.getElementById("MDI_material_movement_type8");
    MDI_material_movement_type8.disabled = true;
    var MDI_item_text8 = document.getElementById("MDI_item_text8");
    MDI_item_text8.disabled = true;      
}    






//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function M_set_field_property_C()
{
    var b_M_set_field_property_C = document.getElementById("b_M_set_field_property_C");
    b_M_set_field_property_C.disabled = true;
    var b_M_set_field_property_R = document.getElementById("b_M_set_field_property_R");
    b_M_set_field_property_R.disabled = false;
    var b_M_set_field_property_U = document.getElementById("b_M_set_field_property_U");
    b_M_set_field_property_U.disabled = false;
    var b_M_set_field_property_D = document.getElementById("b_M_set_field_property_D");
    b_M_set_field_property_D.disabled = false;    

    MG_set_field_property_C();
    MP_set_field_property_C();
    MSL_set_field_property_C();
    
    var b_M_create_controller = document.getElementById("b_M_create_controller");
    b_M_create_controller.disabled = false; 
    var b_M_read_controller = document.getElementById("b_M_read_controller");
    b_M_read_controller.disabled = true; 
    var b_M_update_controller = document.getElementById("b_M_update_controller");
    b_M_update_controller.disabled = true; 
    var b_M_delete_controller = document.getElementById("b_M_delete_controller");
    b_M_delete_controller.disabled = true;                    
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function M_copy_screen_input_C()
{
    lv_tenant = document.getElementById('M_tenant').value;

    MG_copy_screen_input_C(lv_tenant);
    MP_copy_screen_input_C(lv_tenant);
    MSL_copy_screen_input_C(lv_tenant);
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function M_copy_output_screen_C()
{
    MG_copy_output_screen_C(lt_MG_output_material_general);
    MP_copy_output_screen_C(lt_MP_output_material_plant);
    MSL_copy_output_screen_C(lt_MSL_output_material_storage_location); 
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function M_set_field_property_R()
{
    var b_M_set_field_property_C = document.getElementById("b_M_set_field_property_C");
    b_M_set_field_property_C.disabled = false;
    var b_M_set_field_property_R = document.getElementById("b_M_set_field_property_R");
    b_M_set_field_property_R.disabled = true;
    var b_M_set_field_property_U = document.getElementById("b_M_set_field_property_U");
    b_M_set_field_property_U.disabled = false;
    var b_M_set_field_property_D = document.getElementById("b_M_set_field_property_D");
    b_M_set_field_property_D.disabled = false;    

    MG_set_field_property_R();
    MP_set_field_property_R();
    MSL_set_field_property_R();

    var b_M_create_controller = document.getElementById("b_M_create_controller");
    b_M_create_controller.disabled = true; 
    var b_M_read_controller = document.getElementById("b_M_read_controller");
    b_M_read_controller.disabled = false; 
    var b_M_update_controller = document.getElementById("b_M_update_controller");
    b_M_update_controller.disabled = true; 
    var b_M_delete_controller = document.getElementById("b_M_delete_controller");
    b_M_delete_controller.disabled = true;                    
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function M_copy_screen_input_R()
{
    lv_tenant = document.getElementById('M_tenant').value;

    MG_copy_screen_input_R(lv_tenant);
    MP_copy_screen_input_R(lv_tenant);
    MSL_copy_screen_input_R(lv_tenant);
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function M_copy_output_screen_R()
{
    MG_copy_output_screen_R(lt_MG_output_material_general);
    MP_copy_output_screen_R(lt_MP_output_material_plant);
    MSL_copy_output_screen_R(lt_MSL_output_material_storage_location); 
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function M_set_field_property_U()
{
    var b_M_set_field_property_C = document.getElementById("b_M_set_field_property_C");
    b_M_set_field_property_C.disabled = false;
    var b_M_set_field_property_R = document.getElementById("b_M_set_field_property_R");
    b_M_set_field_property_R.disabled = false;
    var b_M_set_field_property_U = document.getElementById("b_M_set_field_property_U");
    b_M_set_field_property_U.disabled = true;
    var b_M_set_field_property_D = document.getElementById("b_M_set_field_property_D");
    b_M_set_field_property_D.disabled = false;    

    MG_set_field_property_U();
    MP_set_field_property_U();
    MSL_set_field_property_U();
    
    var b_M_create_controller = document.getElementById("b_M_create_controller");
    b_M_create_controller.disabled = true; 
    var b_M_read_controller = document.getElementById("b_M_read_controller");
    b_M_read_controller.disabled = true; 
    var b_M_update_controller = document.getElementById("b_M_update_controller");
    b_M_update_controller.disabled = false; 
    var b_M_delete_controller = document.getElementById("b_M_delete_controller");
    b_M_delete_controller.disabled = true;                    
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function M_copy_screen_input_U()
{
    lv_tenant = document.getElementById('M_tenant').value;

    MG_copy_screen_input_U(lv_tenant);
    MP_copy_screen_input_U(lv_tenant);
    MSL_copy_screen_input_U(lv_tenant);
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function M_copy_output_screen_U()
{
    MG_copy_output_screen_U(lt_MG_output_material_general);
    MP_copy_output_screen_U(lt_MP_output_material_plant);
    MSL_copy_output_screen_U(lt_MSL_output_material_storage_location); 
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function M_set_field_property_D()
{
    var b_M_set_field_property_C = document.getElementById("b_M_set_field_property_C");
    b_M_set_field_property_C.disabled = false;
    var b_M_set_field_property_R = document.getElementById("b_M_set_field_property_R");
    b_M_set_field_property_R.disabled = false;
    var b_M_set_field_property_U = document.getElementById("b_M_set_field_property_U");
    M_set_field_property_U.disabled = false;
    var b_M_set_field_property_D = document.getElementById("b_M_set_field_property_D");
    b_M_set_field_property_D.disabled = true;    

    MG_set_field_property_D();
    MP_set_field_property_D();
    MSL_set_field_property_D();
    
    var b_M_create_controller = document.getElementById("b_M_create_controller");
    b_M_create_controller.disabled = true; 
    var b_M_read_controller = document.getElementById("b_M_read_controller");
    b_M_read_controller.disabled = true; 
    var b_M_update_controller = document.getElementById("b_M_update_controller");
    b_M_update_controller.disabled = true; 
    var b_M_delete_controller = document.getElementById("b_M_delete_controller");
    b_M_delete_controller.disabled = false;                    
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function M_copy_screen_input_D()
{
    lv_tenant = document.getElementById('M_tenant').value;

    MG_copy_screen_input_D(lv_tenant);
    MP_copy_screen_input_D(lv_tenant);
    MSL_copy_screen_input_D(lv_tenant);
}


//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
function M_copy_output_screen_D()
{
    MG_copy_output_screen_D(lt_MG_output_material_general);
    MP_copy_output_screen_D(lt_MP_output_material_plant);
    MSL_copy_output_screen_D(lt_MSL_output_material_storage_location); 
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_set_field_property_C()
{
    var MG_material1 = document.getElementById("MG_material1");
    MG_material1.disabled = false;
    var MG_material_type1 = document.getElementById("MG_material_type1");
    MG_material_type1.disabled = false;
    var MG_material_description1 = document.getElementById("MG_material_description1");
    MG_material_description1.disabled = false;
    var MG_base_UOM1 = document.getElementById("MG_base_UOM1");
    MG_base_UOM1.disabled = false;  
    var MG_material_group1 = document.getElementById("MG_material_group1");
    MG_material_group1.disabled = false;
    
    var MG_material2 = document.getElementById("MG_material2");
    MG_material2.disabled = false;
    var MG_material_type2 = document.getElementById("MG_material_type2");
    MG_material_type2.disabled = false;
    var MG_material_description2 = document.getElementById("MG_material_description2");
    MG_material_description2.disabled = false;
    var MG_base_UOM2 = document.getElementById("MG_base_UOM2");
    MG_base_UOM2.disabled = false;  
    var MG_material_group2 = document.getElementById("MG_material_group2");
    MG_material_group2.disabled = false; 
    
    var MG_material3 = document.getElementById("MG_material3");
    MG_material3.disabled = false;
    var MG_material_type3 = document.getElementById("MG_material_type3");
    MG_material_type3.disabled = false;
    var MG_material_description3 = document.getElementById("MG_material_description3");
    MG_material_description3.disabled = false;
    var MG_base_UOM3 = document.getElementById("MG_base_UOM3");
    MG_base_UOM3.disabled = false;  
    var MG_material_group3 = document.getElementById("MG_material_group3");
    MG_material_group3.disabled = false; 
    
    var MG_material4 = document.getElementById("MG_material4");
    MG_material4.disabled = false;
    var MG_material_type4 = document.getElementById("MG_material_type4");
    MG_material_type4.disabled = false;
    var MG_material_description4 = document.getElementById("MG_material_description4");
    MG_material_description4.disabled = false;
    var MG_base_UOM4 = document.getElementById("MG_base_UOM4");
    MG_base_UOM4.disabled = false;  
    var MG_material_group4 = document.getElementById("MG_material_group4");
    MG_material_group4.disabled = false;
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_set_field_property_C()
{
    var MP_material1 = document.getElementById("MP_material1");
    MP_material1.disabled = false;
    var MP_plant1 = document.getElementById("MP_plant1");
    MP_plant1.disabled = false;
    var MP_reorder_point1 = document.getElementById("MP_reorder_point1");
    MP_reorder_point1.disabled = false;
    var MP_moving_average_price1 = document.getElementById("MP_moving_average_price1");
    MP_moving_average_price1.disabled = false;  

    var MP_material2 = document.getElementById("MP_material2");
    MP_material2.disabled = false;
    var MP_plant2 = document.getElementById("MP_plant2");
    MP_plant2.disabled = false;
    var MP_reorder_point2 = document.getElementById("MP_reorder_point2");
    MP_reorder_point2.disabled = false;
    var MP_moving_average_price2 = document.getElementById("MP_moving_average_price2");
    MP_moving_average_price2.disabled = false; 
    
    var MP_material3 = document.getElementById("MP_material3");
    MP_material3.disabled = false;
    var MP_plant3 = document.getElementById("MP_plant3");
    MP_plant3.disabled = false;
    var MP_reorder_point3 = document.getElementById("MP_reorder_point3");
    MP_reorder_point3.disabled = false;
    var MP_moving_average_price3 = document.getElementById("MP_moving_average_price3");
    MP_moving_average_price3.disabled = false; 

    var MP_material4 = document.getElementById("MP_material4");
    MP_material4.disabled = false;
    var MP_plant4 = document.getElementById("MP_plant4");
    MP_plant4.disabled = false;
    var MP_reorder_point4 = document.getElementById("MP_reorder_point4");
    MP_reorder_point4.disabled = false;
    var MP_moving_average_price4 = document.getElementById("MP_moving_average_price4");
    MP_moving_average_price4.disabled = false; 
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_set_field_property_C()
{
    var MSL_material1 = document.getElementById("MSL_material1");
    MSL_material1.disabled = false;
    var MSL_plant1 = document.getElementById("MSL_plant1");
    MSL_plant1.disabled = false;
    var MSL_storage_location1 = document.getElementById("MSL_storage_location1");
    MSL_storage_location1.disabled = false;
    var MSL_storage_bin1 = document.getElementById("MSL_storage_bin1");
    MSL_storage_bin1.disabled = false;

    var MSL_material2 = document.getElementById("MSL_material2");
    MSL_material2.disabled = false;
    var MSL_plant2 = document.getElementById("MSL_plant2");
    MSL_plant2.disabled = false;
    var MSL_storage_location2 = document.getElementById("MSL_storage_location2");
    MSL_storage_location2.disabled = false;
    var MSL_storage_bin2 = document.getElementById("MSL_storage_bin2");
    MSL_storage_bin2.disabled = false;

    var MSL_material3 = document.getElementById("MSL_material3");
    MSL_material3.disabled = false;
    var MSL_plant3 = document.getElementById("MSL_plant3");
    MSL_plant3.disabled = false;
    var MSL_storage_location3 = document.getElementById("MSL_storage_location3");
    MSL_storage_location3.disabled = false;
    var MSL_storage_bin3 = document.getElementById("MSL_storage_bin3");
    MSL_storage_bin3.disabled = false;
    
    var MSL_material4 = document.getElementById("MSL_material4");
    MSL_material4.disabled = false;
    var MSL_plant4 = document.getElementById("MSL_plant4");
    MSL_plant4.disabled = false;
    var MSL_storage_location4 = document.getElementById("MSL_storage_location4");
    MSL_storage_location4.disabled = false;
    var MSL_storage_bin4 = document.getElementById("MSL_storage_bin4");
    MSL_storage_bin4.disabled = false;    
}  


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_set_field_property_R()    
{
    var MG_material1 = document.getElementById("MG_material1");
    MG_material1.disabled = false;
    var MG_material_type1 = document.getElementById("MG_material_type1");
    MG_material_type1.disabled = true;
    var MG_material_description1 = document.getElementById("MG_material_description1");
    MG_material_description1.disabled = true;
    var MG_base_UOM1 = document.getElementById("MG_base_UOM1");
    MG_base_UOM1.disabled = true;  
    var MG_material_group1 = document.getElementById("MG_material_group1");
    MG_material_group1.disabled = true;

    var MG_material2 = document.getElementById("MG_material2");
    MG_material2.disabled = false;
    var MG_material_type2 = document.getElementById("MG_material_type2");
    MG_material_type2.disabled = true;
    var MG_material_description2 = document.getElementById("MG_material_description2");
    MG_material_description2.disabled = true;
    var MG_base_UOM2 = document.getElementById("MG_base_UOM2");
    MG_base_UOM2.disabled = true;  
    var MG_material_group2 = document.getElementById("MG_material_group2");
    MG_material_group2.disabled = true; 

    var MG_material3 = document.getElementById("MG_material3");
    MG_material3.disabled = false;
    var MG_material_type3 = document.getElementById("MG_material_type3");
    MG_material_type3.disabled = true;
    var MG_material_description3 = document.getElementById("MG_material_description3");
    MG_material_description3.disabled = true;
    var MG_base_UOM3 = document.getElementById("MG_base_UOM3");
    MG_base_UOM3.disabled = true;  
    var MG_material_group3 = document.getElementById("MG_material_group3");
    MG_material_group3.disabled = true; 

    var MG_material4 = document.getElementById("MG_material4");
    MG_material4.disabled = false;
    var MG_material_type4 = document.getElementById("MG_material_type4");
    MG_material_type4.disabled = true;
    var MG_material_description4 = document.getElementById("MG_material_description4");
    MG_material_description4.disabled = true;
    var MG_base_UOM4 = document.getElementById("MG_base_UOM4");
    MG_base_UOM4.disabled = true;  
    var MG_material_group4 = document.getElementById("MG_material_group4");
    MG_material_group4.disabled = true;
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_set_field_property_R()
{
    var MP_material1 = document.getElementById("MP_material1");
    MP_material1.disabled = false;
    var MP_plant1 = document.getElementById("MP_plant1");
    MP_plant1.disabled = false;
    var MP_reorder_point1 = document.getElementById("MP_reorder_point1");
    MP_reorder_point1.disabled = true;
    var MP_moving_average_price1 = document.getElementById("MP_moving_average_price1");
    MP_moving_average_price1.disabled = true;  

    var MP_material2 = document.getElementById("MP_material2");
    MP_material2.disabled = false;
    var MP_plant2 = document.getElementById("MP_plant2");
    MP_plant2.disabled = false;
    var MP_reorder_point2 = document.getElementById("MP_reorder_point2");
    MP_reorder_point2.disabled = true;
    var MP_moving_average_price2 = document.getElementById("MP_moving_average_price2");
    MP_moving_average_price2.disabled = true; 
    
    var MP_material3 = document.getElementById("MP_material3");
    MP_material3.disabled = false;
    var MP_plant3 = document.getElementById("MP_plant3");
    MP_plant3.disabled = false;
    var MP_reorder_point3 = document.getElementById("MP_reorder_point3");
    MP_reorder_point3.disabled = true;
    var MP_moving_average_price3 = document.getElementById("MP_moving_average_price3");
    MP_moving_average_price3.disabled = true; 

    var MP_material4 = document.getElementById("MP_material4");
    MP_material4.disabled = false;
    var MP_plant4 = document.getElementById("MP_plant4");
    MP_plant4.disabled = false;
    var MP_reorder_point4 = document.getElementById("MP_reorder_point4");
    MP_reorder_point4.disabled = true;
    var MP_moving_average_price4 = document.getElementById("MP_moving_average_price4");
    MP_moving_average_price4.disabled = true; 
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_set_field_property_R()
{
    var MSL_material1 = document.getElementById("MSL_material1");
    MSL_material1.disabled = false;
    var MSL_plant1 = document.getElementById("MSL_plant1");
    MSL_plant1.disabled = false;
    var MSL_storage_location1 = document.getElementById("MSL_storage_location1");
    MSL_storage_location1.disabled = false;
    var MSL_storage_bin1 = document.getElementById("MSL_storage_bin1");
    MSL_storage_bin1.disabled = true;

    var MSL_material2 = document.getElementById("MSL_material2");
    MSL_material2.disabled = false;
    var MSL_plant2 = document.getElementById("MSL_plant2");
    MSL_plant2.disabled = false;
    var MSL_storage_location2 = document.getElementById("MSL_storage_location2");
    MSL_storage_location2.disabled = false;
    var MSL_storage_bin2 = document.getElementById("MSL_storage_bin2");
    MSL_storage_bin2.disabled = true;

    var MSL_material3 = document.getElementById("MSL_material3");
    MSL_material3.disabled = false;
    var MSL_plant3 = document.getElementById("MSL_plant3");
    MSL_plant3.disabled = false;
    var MSL_storage_location3 = document.getElementById("MSL_storage_location3");
    MSL_storage_location3.disabled = false;
    var MSL_storage_bin3 = document.getElementById("MSL_storage_bin3");
    MSL_storage_bin3.disabled = true;
    
    var MSL_material4 = document.getElementById("MSL_material4");
    MSL_material4.disabled = false;
    var MSL_plant4 = document.getElementById("MSL_plant4");
    MSL_plant4.disabled = false;
    var MSL_storage_location4 = document.getElementById("MSL_storage_location4");
    MSL_storage_location4.disabled = false;
    var MSL_storage_bin4 = document.getElementById("MSL_storage_bin4");
    MSL_storage_bin4.disabled = true;    
}  


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_set_field_property_U()
{    
    var MG_material1 = document.getElementById("MG_material1");
    MG_material1.disabled = false;
    var MG_material_type1 = document.getElementById("MG_material_type1");
    MG_material_type1.disabled = true;
    var MG_material_description1 = document.getElementById("MG_material_description1");
    MG_material_description1.disabled = false;
    var MG_base_UOM1 = document.getElementById("MG_base_UOM1");
    MG_base_UOM1.disabled = true;  
    var MG_material_group1 = document.getElementById("MG_material_group1");
    MG_material_group1.disabled = false;

    var MG_material2 = document.getElementById("MG_material2");
    MG_material2.disabled = false;
    var MG_material_type2 = document.getElementById("MG_material_type2");
    MG_material_type2.disabled = true;
    var MG_material_description2 = document.getElementById("MG_material_description2");
    MG_material_description2.disabled = false;
    var MG_base_UOM2 = document.getElementById("MG_base_UOM2");
    MG_base_UOM2.disabled = true;  
    var MG_material_group2 = document.getElementById("MG_material_group2");
    MG_material_group2.disabled = false; 

    var MG_material3 = document.getElementById("MG_material3");
    MG_material3.disabled = false;
    var MG_material_type3 = document.getElementById("MG_material_type3");
    MG_material_type3.disabled = true;
    var MG_material_description3 = document.getElementById("MG_material_description3");
    MG_material_description3.disabled = false;
    var MG_base_UOM3 = document.getElementById("MG_base_UOM3");
    MG_base_UOM3.disabled = true;  
    var MG_material_group3 = document.getElementById("MG_material_group3");
    MG_material_group3.disabled = false; 

    var MG_material4 = document.getElementById("MG_material4");
    MG_material4.disabled = false;
    var MG_material_type4 = document.getElementById("MG_material_type4");
    MG_material_type4.disabled = true;
    var MG_material_description4 = document.getElementById("MG_material_description4");
    MG_material_description4.disabled = false;
    var MG_base_UOM4 = document.getElementById("MG_base_UOM4");
    MG_base_UOM4.disabled = true;  
    var MG_material_group4 = document.getElementById("MG_material_group4");
    MG_material_group4.disabled = false;
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_set_field_property_U()
{
    var MP_material1 = document.getElementById("MP_material1");
    MP_material1.disabled = false;
    var MP_plant1 = document.getElementById("MP_plant1");
    MP_plant1.disabled = false;
    var MP_reorder_point1 = document.getElementById("MP_reorder_point1");
    MP_reorder_point1.disabled = false;
    var MP_moving_average_price1 = document.getElementById("MP_moving_average_price1");
    MP_moving_average_price1.disabled = false;  

    var MP_material2 = document.getElementById("MP_material2");
    MP_material2.disabled = false;
    var MP_plant2 = document.getElementById("MP_plant2");
    MP_plant2.disabled = false;
    var MP_reorder_point2 = document.getElementById("MP_reorder_point2");
    MP_reorder_point2.disabled = false;
    var MP_moving_average_price2 = document.getElementById("MP_moving_average_price2");
    MP_moving_average_price2.disabled = false; 
    
    var MP_material3 = document.getElementById("MP_material3");
    MP_material3.disabled = false;
    var MP_plant3 = document.getElementById("MP_plant3");
    MP_plant3.disabled = false;
    var MP_reorder_point3 = document.getElementById("MP_reorder_point3");
    MP_reorder_point3.disabled = false;
    var MP_moving_average_price3 = document.getElementById("MP_moving_average_price3");
    MP_moving_average_price3.disabled = false; 

    var MP_material4 = document.getElementById("MP_material4");
    MP_material4.disabled = false;
    var MP_plant4 = document.getElementById("MP_plant4");
    MP_plant4.disabled = false;
    var MP_reorder_point4 = document.getElementById("MP_reorder_point4");
    MP_reorder_point4.disabled = false;
    var MP_moving_average_price4 = document.getElementById("MP_moving_average_price4");
    MP_moving_average_price4.disabled = false; 
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_set_field_property_U()
{
    var MSL_material1 = document.getElementById("MSL_material1");
    MSL_material1.disabled = false;
    var MSL_plant1 = document.getElementById("MSL_plant1");
    MSL_plant1.disabled = false;
    var MSL_storage_location1 = document.getElementById("MSL_storage_location1");
    MSL_storage_location1.disabled = false;
    var MSL_storage_bin1 = document.getElementById("MSL_storage_bin1");
    MSL_storage_bin1.disabled = false;

    var MSL_material2 = document.getElementById("MSL_material2");
    MSL_material2.disabled = false;
    var MSL_plant2 = document.getElementById("MSL_plant2");
    MSL_plant2.disabled = false;
    var MSL_storage_location2 = document.getElementById("MSL_storage_location2");
    MSL_storage_location2.disabled = false;
    var MSL_storage_bin2 = document.getElementById("MSL_storage_bin2");
    MSL_storage_bin2.disabled = false;

    var MSL_material3 = document.getElementById("MSL_material3");
    MSL_material3.disabled = false;
    var MSL_plant3 = document.getElementById("MSL_plant3");
    MSL_plant3.disabled = false;
    var MSL_storage_location3 = document.getElementById("MSL_storage_location3");
    MSL_storage_location3.disabled = false;
    var MSL_storage_bin3 = document.getElementById("MSL_storage_bin3");
    MSL_storage_bin3.disabled = false;
    
    var MSL_material4 = document.getElementById("MSL_material4");
    MSL_material4.disabled = false;
    var MSL_plant4 = document.getElementById("MSL_plant4");
    MSL_plant4.disabled = false;
    var MSL_storage_location4 = document.getElementById("MSL_storage_location4");
    MSL_storage_location4.disabled = false;
    var MSL_storage_bin4 = document.getElementById("MSL_storage_bin4");
    MSL_storage_bin4.disabled = false;    
}  


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_set_field_property_D()
{
    var MG_material1 = document.getElementById("MG_material1");
    MG_material1.disabled = false;
    var MG_material_type1 = document.getElementById("MG_material_type1");
    MG_material_type1.disabled = true;
    var MG_material_description1 = document.getElementById("MG_material_description1");
    MG_material_description1.disabled = true;
    var MG_base_UOM1 = document.getElementById("MG_base_UOM1");
    MG_base_UOM1.disabled = true;  
    var MG_material_group1 = document.getElementById("MG_material_group1");
    MG_material_group1.disabled = true;

    var MG_material2 = document.getElementById("MG_material2");
    MG_material2.disabled = false;
    var MG_material_type2 = document.getElementById("MG_material_type2");
    MG_material_type2.disabled = true;
    var MG_material_description2 = document.getElementById("MG_material_description2");
    MG_material_description2.disabled = true;
    var MG_base_UOM2 = document.getElementById("MG_base_UOM2");
    MG_base_UOM2.disabled = true;  
    var MG_material_group2 = document.getElementById("MG_material_group2");
    MG_material_group2.disabled = true; 

    var MG_material3 = document.getElementById("MG_material3");
    MG_material3.disabled = false;
    var MG_material_type3 = document.getElementById("MG_material_type3");
    MG_material_type3.disabled = true;
    var MG_material_description3 = document.getElementById("MG_material_description3");
    MG_material_description3.disabled = true;
    var MG_base_UOM3 = document.getElementById("MG_base_UOM3");
    MG_base_UOM3.disabled = true;  
    var MG_material_group3 = document.getElementById("MG_material_group3");
    MG_material_group3.disabled = true; 

    var MG_material4 = document.getElementById("MG_material4");
    MG_material4.disabled = false;
    var MG_material_type4 = document.getElementById("MG_material_type4");
    MG_material_type4.disabled = true;
    var MG_material_description4 = document.getElementById("MG_material_description4");
    MG_material_description4.disabled = true;
    var MG_base_UOM4 = document.getElementById("MG_base_UOM4");
    MG_base_UOM4.disabled = true;  
    var MG_material_group4 = document.getElementById("MG_material_group4");
    MG_material_group4.disabled = true;
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_set_field_property_D()
{
    var MP_material1 = document.getElementById("MP_material1");
    MP_material1.disabled = false;
    var MP_plant1 = document.getElementById("MP_plant1");
    MP_plant1.disabled = false;
    var MP_reorder_point1 = document.getElementById("MP_reorder_point1");
    MP_reorder_point1.disabled = true;
    var MP_moving_average_price1 = document.getElementById("MP_moving_average_price1");
    MP_moving_average_price1.disabled = true;  

    var MP_material2 = document.getElementById("MP_material2");
    MP_material2.disabled = false;
    var MP_plant2 = document.getElementById("MP_plant2");
    MP_plant2.disabled = false;
    var MP_reorder_point2 = document.getElementById("MP_reorder_point2");
    MP_reorder_point2.disabled = true;
    var MP_moving_average_price2 = document.getElementById("MP_moving_average_price2");
    MP_moving_average_price2.disabled = true; 
    
    var MP_material3 = document.getElementById("MP_material3");
    MP_material3.disabled = false;
    var MP_plant3 = document.getElementById("MP_plant3");
    MP_plant3.disabled = false;
    var MP_reorder_point3 = document.getElementById("MP_reorder_point3");
    MP_reorder_point3.disabled = true;
    var MP_moving_average_price3 = document.getElementById("MP_moving_average_price3");
    MP_moving_average_price3.disabled = true; 

    var MP_material4 = document.getElementById("MP_material4");
    MP_material4.disabled = false;
    var MP_plant4 = document.getElementById("MP_plant4");
    MP_plant4.disabled = false;
    var MP_reorder_point4 = document.getElementById("MP_reorder_point4");
    MP_reorder_point4.disabled = true;
    var MP_moving_average_price4 = document.getElementById("MP_moving_average_price4");
    MP_moving_average_price4.disabled = true; 
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_set_field_property_D()
{
    var MSL_material1 = document.getElementById("MSL_material1");
    MSL_material1.disabled = false;
    var MSL_plant1 = document.getElementById("MSL_plant1");
    MSL_plant1.disabled = false;
    var MSL_storage_location1 = document.getElementById("MSL_storage_location1");
    MSL_storage_location1.disabled = false;
    var MSL_storage_bin1 = document.getElementById("MSL_storage_bin1");
    MSL_storage_bin1.disabled = true;

    var MSL_material2 = document.getElementById("MSL_material2");
    MSL_material2.disabled = false;
    var MSL_plant2 = document.getElementById("MSL_plant2");
    MSL_plant2.disabled = false;
    var MSL_storage_location2 = document.getElementById("MSL_storage_location2");
    MSL_storage_location2.disabled = false;
    var MSL_storage_bin2 = document.getElementById("MSL_storage_bin2");
    MSL_storage_bin2.disabled = true;

    var MSL_material3 = document.getElementById("MSL_material3");
    MSL_material3.disabled = false;
    var MSL_plant3 = document.getElementById("MSL_plant3");
    MSL_plant3.disabled = false;
    var MSL_storage_location3 = document.getElementById("MSL_storage_location3");
    MSL_storage_location3.disabled = false;
    var MSL_storage_bin3 = document.getElementById("MSL_storage_bin3");
    MSL_storage_bin3.disabled = true;
    
    var MSL_material4 = document.getElementById("MSL_material4");
    MSL_material4.disabled = false;
    var MSL_plant4 = document.getElementById("MSL_plant4");
    MSL_plant4.disabled = false;
    var MSL_storage_location4 = document.getElementById("MSL_storage_location4");
    MSL_storage_location4.disabled = false;
    var MSL_storage_bin4 = document.getElementById("MSL_storage_bin4");
    MSL_storage_bin4.disabled = true;    
}  


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_copy_screen_input_C(iv_tenant)
{
    var l_material = '';

    l_material = document.getElementById('MG_material1').value;
    if ( l_material != '')
    {
        lt_MG_input_material_general[0] =
        {
        tenant : iv_tenant,
        material : document.getElementById('MG_material1').value,
        material_type : document.getElementById('MG_material_type1').value,
        material_description : document.getElementById('MG_material_description1').value,
        base_UOM : document.getElementById('MG_base_UOM1').value,
        material_group : document.getElementById('MG_material_group1').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MG_material2').value;
    if ( l_material != '')
    {
        lt_MG_input_material_general[1] =
        {
        tenant : iv_tenant,
        material : document.getElementById('MG_material2').value,
        material_type : document.getElementById('MG_material_type2').value,
        material_description : document.getElementById('MG_material_description2').value,
        base_UOM : document.getElementById('MG_base_UOM2').value,
        material_group : document.getElementById('MG_material_group2').value,
        system_field_message_type : '',
        system_field_message_description : ''
        }; 
    }

    l_material = document.getElementById('MG_material3').value;
    if ( l_material != '')
    {    
        lt_MG_input_material_general[2] =
        {
        tenant : iv_tenant,
        material : document.getElementById('MG_material3').value,
        material_type : document.getElementById('MG_material_type3').value,
        material_description : document.getElementById('MG_material_description3').value,
        base_UOM : document.getElementById('MG_base_UOM3').value,
        material_group : document.getElementById('MG_material_group3').value,
        system_field_message_type : '',
        system_field_message_description : ''
        }; 
    }

    l_material = document.getElementById('MG_material4').value;
    if ( l_material != '')
    {     
        lt_MG_input_material_general[3] =
        {
        tenant : iv_tenant,
        material : document.getElementById('MG_material4').value,
        material_type : document.getElementById('MG_material_type4').value,
        material_description : document.getElementById('MG_material_description4').value,
        base_UOM : document.getElementById('MG_base_UOM4').value,
        material_group : document.getElementById('MG_material_group4').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };        
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_copy_screen_input_C(iv_tenant)
{  
    l_material = document.getElementById('MP_material1').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[0] =
        {
        tenant : iv_tenant,
        material : document.getElementById('MP_material1').value,
        plant : document.getElementById('MP_plant1').value,
        reorder_point : document.getElementById('MP_reorder_point1').value,
        moving_average_price : document.getElementById('MP_moving_average_price1').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MP_material2').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[1] =
        {
        tenant : iv_tenant,    
        material : document.getElementById('MP_material2').value,
        plant : document.getElementById('MP_plant2').value,
        reorder_point : document.getElementById('MP_reorder_point2').value,
        moving_average_price : document.getElementById('MP_moving_average_price2').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MP_material3').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[2] =
        {
        tenant : iv_tenant,
        material : document.getElementById('MP_material3').value,
        plant : document.getElementById('MP_plant3').value,
        reorder_point : document.getElementById('MP_reorder_point3').value,
        moving_average_price : document.getElementById('MP_moving_average_price3').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }    

    l_material = document.getElementById('MP_material4').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[3] =
        {
        tenant : iv_tenant,
        material : document.getElementById('MP_material4').value,
        plant : document.getElementById('MP_plant4').value,
        reorder_point : document.getElementById('MP_reorder_point4').value,
        moving_average_price : document.getElementById('MP_moving_average_price4').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }    
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_copy_screen_input_C(iv_tenant)
{    
    l_material = document.getElementById('MSL_material1').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[0] =
        {
        tenant : iv_tenant,
        material : document.getElementById('MSL_material1').value,
        plant : document.getElementById('MSL_plant1').value,
        storage_location : document.getElementById('MSL_storage_location1').value,
        storage_bin : document.getElementById('MSL_storage_bin1').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MSL_material2').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[1] =
        {
        tenant : iv_tenant,
        material : document.getElementById('MSL_material2').value,
        plant : document.getElementById('MSL_plant2').value,
        storage_location : document.getElementById('MSL_storage_location2').value,
        storage_bin : document.getElementById('MSL_storage_bin2').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MSL_material3').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[2] =
        {
        tenant : iv_tenant,
        material : document.getElementById('MSL_material3').value,
        plant : document.getElementById('MSL_plant3').value,
        storage_location : document.getElementById('MSL_storage_location3').value,
        storage_bin : document.getElementById('MSL_storage_bin3').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MSL_material4').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[3] =
        {
        tenant : iv_tenant,
        material : document.getElementById('MSL_material4').value,
        plant : document.getElementById('MSL_plant4').value,
        storage_location : document.getElementById('MSL_storage_location4').value,
        storage_bin : document.getElementById('MSL_storage_bin4').value,
        system_field_message_type : '',
        system_field_message_description : ''
        };
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_copy_output_screen_C(it_MG_output_material_general)
{
    if (it_MG_output_material_general.length >= 1)
    {
        document.getElementById('MG_material1').value = it_MG_output_material_general[0].material;
        document.getElementById('MG_material_type1').value = it_MG_output_material_general[0].material_type;
        document.getElementById('MG_material_description1').value = it_MG_output_material_general[0].material_description;
        document.getElementById('MG_base_UOM1').value = it_MG_output_material_general[0].base_UOM;
        document.getElementById('MG_material_group1').value = it_MG_output_material_general[0].material_group;
        document.getElementById('MG_system_field_message_type1').value = it_MG_output_material_general[0].system_field_message_type;
        document.getElementById('MG_system_field_message_description1').value = it_MG_output_material_general[0].system_field_message_description;
        
        if (document.getElementById('MG_system_field_message_type1').value == 'ERROR')
        {
            document.getElementById('MG_material1').style.color = 'red';
        }
        else        
        {
            document.getElementById('MG_material1').style.color = '';
        }            
    }
    
    if (it_MG_output_material_general.length >= 2)
    {    
        document.getElementById('MG_material2').value = it_MG_output_material_general[1].material;
        document.getElementById('MG_material_type2').value = it_MG_output_material_general[1].material_type;
        document.getElementById('MG_material_description2').value = it_MG_output_material_general[1].material_description;
        document.getElementById('MG_base_UOM2').value = it_MG_output_material_general[1].base_UOM;
        document.getElementById('MG_material_group2').value = it_MG_output_material_general[1].material_group;
        document.getElementById('MG_system_field_message_type2').value = it_MG_output_material_general[1].system_field_message_type;
        document.getElementById('MG_system_field_message_description2').value = it_MG_output_material_general[1].system_field_message_description;  

        if (document.getElementById('MG_system_field_message_type2').value == 'ERROR')
        {
            document.getElementById('MG_material2').style.color = 'red';
        }
        else        
        {
            document.getElementById('MG_material2').style.color = '';
        }     
    }
    
    if (it_MG_output_material_general.length >= 3)
    {        
        document.getElementById('MG_material3').value = it_MG_output_material_general[2].material;
        document.getElementById('MG_material_type3').value = it_MG_output_material_general[2].material_type;
        document.getElementById('MG_material_description3').value = it_MG_output_material_general[2].material_description;
        document.getElementById('MG_base_UOM3').value = it_MG_output_material_general[2].base_UOM;
        document.getElementById('MG_material_group3').value = it_MG_output_material_general[2].material_group;
        document.getElementById('MG_system_field_message_type3').value = it_MG_output_material_general[2].system_field_message_type;
        document.getElementById('MG_system_field_message_description3').value = it_MG_output_material_general[2].system_field_message_description;  

        if (document.getElementById('MG_system_field_message_type3').value == 'ERROR')
        {
            document.getElementById('MG_material3').style.color = 'red';
        }
        else        
        {
            document.getElementById('MG_material3').style.color = '';
        }     
    }
    
    if (it_MG_output_material_general.length >= 4)
    {            
        document.getElementById('MG_material4').value = it_MG_output_material_general[3].material;
        document.getElementById('MG_material_type4').value = it_MG_output_material_general[3].material_type;
        document.getElementById('MG_material_description4').value = it_MG_output_material_general[3].material_description;
        document.getElementById('MG_base_UOM4').value = it_MG_output_material_general[3].base_UOM;
        document.getElementById('MG_material_group4').value = it_MG_output_material_general[3].material_group;
        document.getElementById('MG_system_field_message_type4').value = it_MG_output_material_general[3].system_field_message_type;
        document.getElementById('MG_system_field_message_description4').value = it_MG_output_material_general[3].system_field_message_description;
    
        if (document.getElementById('MG_system_field_message_type4').value == 'ERROR')
        {
            document.getElementById('MG_material4').style.color = 'red';
        }
        else        
        {
            document.getElementById('MG_material4').style.color = '';
        }         
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_copy_output_screen_C(it_MP_output_material_plant)
{
    if (it_MP_output_material_plant.length >= 1)
    {
        document.getElementById('MP_material1').value = it_MP_output_material_plant[0].material;
        document.getElementById('MP_plant1').value = it_MP_output_material_plant[0].plant;
        document.getElementById('MP_reorder_point1').value = it_MP_output_material_plant[0].reorder_point;
        document.getElementById('MP_moving_average_price1').value = it_MP_output_material_plant[0].moving_average_price; 
        document.getElementById('MP_system_field_message_type1').value = it_MP_output_material_plant[0].system_field_message_type;
        document.getElementById('MP_system_field_message_description1').value = it_MP_output_material_plant[0].system_field_message_description;
    }
    
    if (it_MP_output_material_plant.length >= 2)
    {
        document.getElementById('MP_material2').value = it_MP_output_material_plant[1].material;
        document.getElementById('MP_plant2').value = it_MP_output_material_plant[1].plant;
        document.getElementById('MP_reorder_point2').value = it_MP_output_material_plant[1].reorder_point;
        document.getElementById('MP_moving_average_price2').value = it_MP_output_material_plant[1].moving_average_price; 
        document.getElementById('MP_system_field_message_type2').value = it_MP_output_material_plant[1].system_field_message_type;
        document.getElementById('MP_system_field_message_description2').value = it_MP_output_material_plant[1].system_field_message_description;
    }

    if (it_MP_output_material_plant.length >= 3)
    {
        document.getElementById('MP_material3').value = it_MP_output_material_plant[2].material;
        document.getElementById('MP_plant3').value = it_MP_output_material_plant[2].plant;
        document.getElementById('MP_reorder_point3').value = it_MP_output_material_plant[2].reorder_point;
        document.getElementById('MP_moving_average_price3').value = it_MP_output_material_plant[2].moving_average_price; 
        document.getElementById('MP_system_field_message_type3').value = it_MP_output_material_plant[2].system_field_message_type;
        document.getElementById('MP_system_field_message_description3').value = it_MP_output_material_plant[2].system_field_message_description;
    }  
    
    if (it_MP_output_material_plant.length >= 4)
    {
        document.getElementById('MP_material4').value = it_MP_output_material_plant[3].material;
        document.getElementById('MP_plant4').value = it_MP_output_material_plant[3].plant;
        document.getElementById('MP_reorder_point4').value = it_MP_output_material_plant[3].reorder_point;
        document.getElementById('MP_moving_average_price4').value = it_MP_output_material_plant[3].moving_average_price; 
        document.getElementById('MP_system_field_message_type4').value = it_MP_output_material_plant[3].system_field_message_type;
        document.getElementById('MP_system_field_message_description4').value = it_MP_output_material_plant[3].system_field_message_description;
    }      
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_copy_output_screen_C(it_MSL_output_material_storage_location)
{
    if (it_MSL_output_material_storage_location.length >= 1)
    {
        document.getElementById('MSL_material1').value = it_MSL_output_material_storage_location[0].material;
        document.getElementById('MSL_plant1').value = it_MSL_output_material_storage_location[0].plant;
        document.getElementById('MSL_storage_location1').value = it_MSL_output_material_storage_location[0].storage_location;
        document.getElementById('MSL_storage_bin1').value = it_MSL_output_material_storage_location[0].storage_bin; 
        document.getElementById('MSL_system_field_message_type1').value = it_MSL_output_material_storage_location[0].system_field_message_type;
        document.getElementById('MSL_system_field_message_description1').value = it_MSL_output_material_storage_location[0].system_field_message_description;
    }

    if (it_MSL_output_material_storage_location.length >= 2)
    {
        document.getElementById('MSL_material2').value = it_MSL_output_material_storage_location[1].material;
        document.getElementById('MSL_plant2').value = it_MSL_output_material_storage_location[1].plant;
        document.getElementById('MSL_storage_location2').value = it_MSL_output_material_storage_location[1].storage_location;
        document.getElementById('MSL_storage_bin2').value = it_MSL_output_material_storage_location[1].storage_bin; 
        document.getElementById('MSL_system_field_message_type2').value = it_MSL_output_material_storage_location[1].system_field_message_type;
        document.getElementById('MSL_system_field_message_description2').value = it_MSL_output_material_storage_location[1].system_field_message_description;
    } 
    
    if (it_MSL_output_material_storage_location.length >= 3)
    {
        document.getElementById('MSL_material3').value = it_MSL_output_material_storage_location[2].material;
        document.getElementById('MSL_plant3').value = it_MSL_output_material_storage_location[2].plant;
        document.getElementById('MSL_storage_location3').value = it_MSL_output_material_storage_location[2].storage_location;
        document.getElementById('MSL_storage_bin3').value = it_MSL_output_material_storage_location[2].storage_bin; 
        document.getElementById('MSL_system_field_message_type3').value = it_MSL_output_material_storage_location[2].system_field_message_type;
        document.getElementById('MSL_system_field_message_description3').value = it_MSL_output_material_storage_location[2].system_field_message_description;
    }
    
    if (it_MSL_output_material_storage_location.length >= 4)
    {
        document.getElementById('MSL_material4').value = it_MSL_output_material_storage_location[3].material;
        document.getElementById('MSL_plant4').value = it_MSL_output_material_storage_location[3].plant;
        document.getElementById('MSL_storage_location4').value = it_MSL_output_material_storage_location[3].storage_location;
        document.getElementById('MSL_storage_bin4').value = it_MSL_output_material_storage_location[3].storage_bin; 
        document.getElementById('MSL_system_field_message_type4').value = it_MSL_output_material_storage_location[3].system_field_message_type;
        document.getElementById('MSL_system_field_message_description4').value = it_MSL_output_material_storage_location[3].system_field_message_description;
    }        
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_copy_screen_input_R(iv_tenant)
{
    var l_material = '';

    l_material = document.getElementById('MG_material1').value;
    if ( l_material != '')
    {
        lt_MG_input_material_general[0] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MG_material1').value,
            material_type : '',
            material_description : '',
            base_UOM : '',
            material_group : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MG_material2').value;
    if ( l_material != '')
    {
        lt_MG_input_material_general[1] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MG_material2').value,
            material_type : '',
            material_description : '',
            base_UOM : '',
            material_group : '',
            system_field_message_type : '',
            system_field_message_description : ''
        }; 
    }

    l_material = document.getElementById('MG_material3').value;
    if ( l_material != '')
    {    
        lt_MG_input_material_general[2] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MG_material3').value,
            material_type : '',
            material_description : '',
            base_UOM : '',
            material_group : '',
            system_field_message_type : '',
            system_field_message_description : ''
        }; 
    }

    l_material = document.getElementById('MG_material4').value;
    if ( l_material != '')
    {     
        lt_MG_input_material_general[3] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MG_material4').value,
            material_type : '',
            material_description : '',
            base_UOM : '',
            material_group : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };        
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_copy_screen_input_R(iv_tenant)
{
    l_material = document.getElementById('MP_material1').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[0] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MP_material1').value,
            plant : document.getElementById('MP_plant1').value,
            reorder_point : '',
            moving_average_price : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MP_material2').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[1] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MP_material2').value,
            plant : document.getElementById('MP_plant2').value,
            reorder_point : '',
            moving_average_price : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MP_material3').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[2] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MP_material3').value,
            plant : document.getElementById('MP_plant3').value,
            reorder_point : '',
            moving_average_price : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }    

    l_material = document.getElementById('MP_material4').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[3] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MP_material4').value,
            plant : document.getElementById('MP_plant4').value,
            reorder_point : '',
            moving_average_price : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }    
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_copy_screen_input_R(iv_tenant)
{
    l_material = document.getElementById('MSL_material1').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[0] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MSL_material1').value,
            plant : document.getElementById('MSL_plant1').value,
            storage_location : document.getElementById('MSL_storage_location1').value,
            storage_bin : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MSL_material2').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[1] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MSL_material2').value,
            plant : document.getElementById('MSL_plant2').value,
            storage_location : document.getElementById('MSL_storage_location2').value,
            storage_bin : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MSL_material3').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[2] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MSL_material3').value,
            plant : document.getElementById('MSL_plant3').value,
            storage_location : document.getElementById('MSL_storage_location3').value,
            storage_bin : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MSL_material4').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[3] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MSL_material4').value,
            plant : document.getElementById('MSL_plant4').value,
            storage_location : document.getElementById('MSL_storage_location4').value,
            storage_bin : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_copy_output_screen_R(it_MG_output_material_general)
{
    if (it_MG_output_material_general.length >= 1)
        {
        document.getElementById('MG_material1').value = it_MG_output_material_general[0].material;
        document.getElementById('MG_material_type1').value = it_MG_output_material_general[0].material_type;
        document.getElementById('MG_material_description1').value = it_MG_output_material_general[0].material_description;
        document.getElementById('MG_base_UOM1').value = it_MG_output_material_general[0].base_UOM; 
        document.getElementById('MG_material_group1').value = it_MG_output_material_general[0].material_group;
        document.getElementById('MG_system_field_message_type1').value = it_MG_output_material_general[0].system_field_message_type;
        document.getElementById('MG_system_field_message_description1').value = it_MG_output_material_general[0].system_field_message_description;
        }
    
        if (it_MG_output_material_general.length >= 2)
        {    
        document.getElementById('MG_material2').value = it_MG_output_material_general[1].material;
        document.getElementById('MG_material_type2').value = it_MG_output_material_general[1].material_type;
        document.getElementById('MG_material_description2').value = it_MG_output_material_general[1].material_description;
        document.getElementById('MG_base_UOM2').value = it_MG_output_material_general[1].base_UOM;
        document.getElementById('MG_material_group2').value = it_MG_output_material_general[1].material_group;
        document.getElementById('MG_system_field_message_type2').value = it_MG_output_material_general[1].system_field_message_type;
        document.getElementById('MG_system_field_message_description2').value = it_MG_output_material_general[1].system_field_message_description;  
        }
    
        if (it_MG_output_material_general.length >= 3)
        {        
        document.getElementById('MG_material3').value = it_MG_output_material_general[2].material;
        document.getElementById('MG_material_type3').value = it_MG_output_material_general[2].material_type;
        document.getElementById('MG_material_description3').value = it_MG_output_material_general[2].material_description;
        document.getElementById('MG_base_UOM3').value = it_MG_output_material_general[2].base_UOM;
        document.getElementById('MG_material_group3').value = it_MG_output_material_general[2].material_group;
        document.getElementById('MG_system_field_message_type3').value = it_MG_output_material_general[2].system_field_message_type;
        document.getElementById('MG_system_field_message_description3').value = it_MG_output_material_general[2].system_field_message_description;  
        }
    
        if (it_MG_output_material_general.length >= 4)
        {            
        document.getElementById('MG_material4').value = it_MG_output_material_general[3].material;
        document.getElementById('MG_material_type4').value = it_MG_output_material_general[3].material_type;
        document.getElementById('MG_material_description4').value = it_MG_output_material_general[3].material_description;
        document.getElementById('MG_base_UOM4').value = it_MG_output_material_general[3].base_UOM;
        document.getElementById('MG_material_group4').value = it_MG_output_material_general[3].material_group;
        document.getElementById('MG_system_field_message_type4').value = it_MG_output_material_general[3].system_field_message_type;
        document.getElementById('MG_system_field_message_description4').value = it_MG_output_material_general[3].system_field_message_description;
        }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_copy_output_screen_R(it_MP_output_material_plant)
{
    if (it_MP_output_material_plant.length >= 1)
    {
        document.getElementById('MP_material1').value = it_MP_output_material_plant[0].material;
        document.getElementById('MP_plant1').value = it_MP_output_material_plant[0].plant;
        document.getElementById('MP_reorder_point1').value = it_MP_output_material_plant[0].reorder_point;
        document.getElementById('MP_moving_average_price1').value = it_MP_output_material_plant[0].moving_average_price; 
        document.getElementById('MP_system_field_message_type1').value = it_MP_output_material_plant[0].system_field_message_type;
        document.getElementById('MP_system_field_message_description1').value = it_MP_output_material_plant[0].system_field_message_description;
    }
    
    if (it_MP_output_material_plant.length >= 2)
    {
        document.getElementById('MP_material2').value = it_MP_output_material_plant[1].material;
        document.getElementById('MP_plant2').value = it_MP_output_material_plant[1].plant;
        document.getElementById('MP_reorder_point2').value = it_MP_output_material_plant[1].reorder_point;
        document.getElementById('MP_moving_average_price2').value = it_MP_output_material_plant[1].moving_average_price; 
        document.getElementById('MP_system_field_message_type2').value = it_MP_output_material_plant[1].system_field_message_type;
        document.getElementById('MP_system_field_message_description2').value = it_MP_output_material_plant[1].system_field_message_description;
    }

    if (it_MP_output_material_plant.length >= 3)
    {
        document.getElementById('MP_material3').value = it_MP_output_material_plant[2].material;
        document.getElementById('MP_plant3').value = it_MP_output_material_plant[2].plant;
        document.getElementById('MP_reorder_point3').value = it_MP_output_material_plant[2].reorder_point;
        document.getElementById('MP_moving_average_price3').value = it_MP_output_material_plant[2].moving_average_price; 
        document.getElementById('MP_system_field_message_type3').value = it_MP_output_material_plant[2].system_field_message_type;
        document.getElementById('MP_system_field_message_description3').value = it_MP_output_material_plant[2].system_field_message_description;
    }  
    
    if (it_MP_output_material_plant.length >= 4)
    {
        document.getElementById('MP_material4').value = it_MP_output_material_plant[3].material;
        document.getElementById('MP_plant4').value = it_MP_output_material_plant[3].plant;
        document.getElementById('MP_reorder_point4').value = it_MP_output_material_plant[3].reorder_point;
        document.getElementById('MP_moving_average_price4').value = it_MP_output_material_plant[3].moving_average_price; 
        document.getElementById('MP_system_field_message_type4').value = it_MP_output_material_plant[3].system_field_message_type;
        document.getElementById('MP_system_field_message_description4').value = it_MP_output_material_plant[3].system_field_message_description;
    }      
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_copy_output_screen_R(it_MSL_output_material_storage_location)
{
    if (it_MSL_output_material_storage_location.length >= 1)
    {
        document.getElementById('MSL_material1').value = it_MSL_output_material_storage_location[0].material;
        document.getElementById('MSL_plant1').value = it_MSL_output_material_storage_location[0].plant;
        document.getElementById('MSL_storage_location1').value = it_MSL_output_material_storage_location[0].storage_location;
        document.getElementById('MSL_storage_bin1').value = it_MSL_output_material_storage_location[0].storage_bin; 
        document.getElementById('MSL_system_field_message_type1').value = it_MSL_output_material_storage_location[0].system_field_message_type;
        document.getElementById('MSL_system_field_message_description1').value = it_MSL_output_material_storage_location[0].system_field_message_description;
    }

    if (it_MSL_output_material_storage_location.length >= 2)
    {
        document.getElementById('MSL_material2').value = it_MSL_output_material_storage_location[1].material;
        document.getElementById('MSL_plant2').value = it_MSL_output_material_storage_location[1].plant;
        document.getElementById('MSL_storage_location2').value = it_MSL_output_material_storage_location[1].storage_location;
        document.getElementById('MSL_storage_bin2').value = it_MSL_output_material_storage_location[1].storage_bin; 
        document.getElementById('MSL_system_field_message_type2').value = it_MSL_output_material_storage_location[1].system_field_message_type;
        document.getElementById('MSL_system_field_message_description2').value = it_MSL_output_material_storage_location[1].system_field_message_description;
    } 
    
    if (it_MSL_output_material_storage_location.length >= 3)
    {
        document.getElementById('MSL_material3').value = it_MSL_output_material_storage_location[2].material;
        document.getElementById('MSL_plant3').value = it_MSL_output_material_storage_location[2].plant;
        document.getElementById('MSL_storage_location3').value = it_MSL_output_material_storage_location[2].storage_location;
        document.getElementById('MSL_storage_bin3').value = it_MSL_output_material_storage_location[2].storage_bin; 
        document.getElementById('MSL_system_field_message_type3').value = it_MSL_output_material_storage_location[2].system_field_message_type;
        document.getElementById('MSL_system_field_message_description3').value = it_MSL_output_material_storage_location[2].system_field_message_description;
    }
    
    if (it_MSL_output_material_storage_location.length >= 4)
    {
        document.getElementById('MSL_material4').value = it_MSL_output_material_storage_location[3].material;
        document.getElementById('MSL_plant4').value = it_MSL_output_material_storage_location[3].plant;
        document.getElementById('MSL_storage_location4').value = it_MSL_output_material_storage_location[3].storage_location;
        document.getElementById('MSL_storage_bin4').value = it_MSL_output_material_storage_location[3].storage_bin; 
        document.getElementById('MSL_system_field_message_type4').value = it_MSL_output_material_storage_location[3].system_field_message_type;
        document.getElementById('MSL_system_field_message_description4').value = it_MSL_output_material_storage_location[3].system_field_message_description;
    }        
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_copy_screen_input_U(iv_tenant)
{
    var l_material = '';

    l_material = document.getElementById('MG_material1').value;
    if ( l_material != '')
    {
        lt_MG_input_material_general[0] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MG_material1').value,
            material_type : document.getElementById('MG_material_type1').value,
            material_description : document.getElementById('MG_material_description1').value,
            base_UOM : document.getElementById('MG_base_UOM1').value,
            material_group : document.getElementById('MG_material_group1').value,
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MG_material2').value;
    if ( l_material != '')
    {
        lt_MG_input_material_general[1] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MG_material2').value,
            material_type : document.getElementById('MG_material_type2').value,
            material_description : document.getElementById('MG_material_description2').value,
            base_UOM : document.getElementById('MG_base_UOM2').value,
            material_group : document.getElementById('MG_material_group2').value,
            system_field_message_type : '',
            system_field_message_description : ''
        }; 
    }

    l_material = document.getElementById('MG_material3').value;
    if ( l_material != '')
    {    
        lt_MG_input_material_general[2] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MG_material3').value,
            material_type : document.getElementById('MG_material_type3').value,
            material_description : document.getElementById('MG_material_description3').value,
            base_UOM : document.getElementById('MG_base_UOM3').value,
            material_group : document.getElementById('MG_material_group3').value,
            system_field_message_type : '',
            system_field_message_description : ''
        }; 
    }

    l_material = document.getElementById('MG_material4').value;
    if ( l_material != '')
    {     
        lt_MG_input_material_general[3] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MG_material4').value,
            material_type : document.getElementById('MG_material_type4').value,
            material_description : document.getElementById('MG_material_description4').value,
            base_UOM : document.getElementById('MG_base_UOM4').value,
            material_group : document.getElementById('MG_material_group4').value,
            system_field_message_type : '',
            system_field_message_description : ''
        };        
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_copy_screen_input_U(iv_tenant)
{
    
    l_material = document.getElementById('MP_material1').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[0] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MP_material1').value,
            plant : document.getElementById('MP_plant1').value,
            reorder_point : document.getElementById('MP_reorder_point1').value,
            moving_average_price : document.getElementById('MP_moving_average_price1').value,
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MP_material2').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[1] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MP_material2').value,
            plant : document.getElementById('MP_plant2').value,
            reorder_point : document.getElementById('MP_reorder_point2').value,
            moving_average_price : document.getElementById('MP_moving_average_price2').value,
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MP_material3').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[2] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MP_material3').value,
            plant : document.getElementById('MP_plant3').value,
            reorder_point : document.getElementById('MP_reorder_point3').value,
            moving_average_price : document.getElementById('MP_moving_average_price3').value,
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }    

    l_material = document.getElementById('MP_material4').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[3] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MP_material4').value,
            plant : document.getElementById('MP_plant4').value,
            reorder_point : document.getElementById('MP_reorder_point4').value,
            moving_average_price : document.getElementById('MP_moving_average_price4').value,
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }    
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_copy_screen_input_U(iv_tenant)
{    
    l_material = document.getElementById('MSL_material1').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[0] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MSL_material1').value,
            plant : document.getElementById('MSL_plant1').value,
            storage_location : document.getElementById('MSL_storage_location1').value,
            storage_bin : document.getElementById('MSL_storage_bin1').value,
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MSL_material2').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[1] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MSL_material2').value,
            plant : document.getElementById('MSL_plant2').value,
            storage_location : document.getElementById('MSL_storage_location2').value,
            storage_bin : document.getElementById('MSL_storage_bin2').value,
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MSL_material3').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[2] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MSL_material3').value,
            plant : document.getElementById('MSL_plant3').value,
            storage_location : document.getElementById('MSL_storage_location3').value,
            storage_bin : document.getElementById('MSL_storage_bin3').value,
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MSL_material4').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[3] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MSL_material4').value,
            plant : document.getElementById('MSL_plant4').value,
            storage_location : document.getElementById('MSL_storage_location4').value,
            storage_bin : document.getElementById('MSL_storage_bin4').value,
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_copy_output_screen_U(it_MG_output_material_general)
{
    if (it_MG_output_material_general.length >= 1)
        {
        document.getElementById('MG_material1').value = it_MG_output_material_general[0].material;
        document.getElementById('MG_material_type1').value = it_MG_output_material_general[0].material_type;
        document.getElementById('MG_material_description1').value = it_MG_output_material_general[0].material_description;
        document.getElementById('MG_base_UOM1').value = it_MG_output_material_general[0].base_UOM; 
        document.getElementById('MG_material_group1').value = it_MG_output_material_general[0].material_group;
        document.getElementById('MG_system_field_message_type1').value = it_MG_output_material_general[0].system_field_message_type;
        document.getElementById('MG_system_field_message_description1').value = it_MG_output_material_general[0].system_field_message_description;
        }
    
        if (it_MG_output_material_general.length >= 2)
        {    
        document.getElementById('MG_material2').value = it_MG_output_material_general[1].material;
        document.getElementById('MG_material_type2').value = it_MG_output_material_general[1].material_type;
        document.getElementById('MG_material_description2').value = it_MG_output_material_general[1].material_description;
        document.getElementById('MG_base_UOM2').value = it_MG_output_material_general[1].base_UOM;
        document.getElementById('MG_material_group2').value = it_MG_output_material_general[1].material_group;
        document.getElementById('MG_system_field_message_type2').value = it_MG_output_material_general[1].system_field_message_type;
        document.getElementById('MG_system_field_message_description2').value = it_MG_output_material_general[1].system_field_message_description;  
        }
    
        if (it_MG_output_material_general.length >= 3)
        {        
        document.getElementById('MG_material3').value = it_MG_output_material_general[2].material;
        document.getElementById('MG_material_type3').value = it_MG_output_material_general[2].material_type;
        document.getElementById('MG_material_description3').value = it_MG_output_material_general[2].material_description;
        document.getElementById('MG_base_UOM3').value = it_MG_output_material_general[2].base_UOM;
        document.getElementById('MG_material_group3').value = it_MG_output_material_general[2].material_group;
        document.getElementById('MG_system_field_message_type3').value = it_MG_output_material_general[2].system_field_message_type;
        document.getElementById('MG_system_field_message_description3').value = it_MG_output_material_general[2].system_field_message_description;  
        }
    
        if (it_MG_output_material_general.length >= 4)
        {            
        document.getElementById('MG_material4').value = it_MG_output_material_general[3].material;
        document.getElementById('MG_material_type4').value = it_MG_output_material_general[3].material_type;
        document.getElementById('MG_material_description4').value = it_MG_output_material_general[3].material_description;
        document.getElementById('MG_base_UOM4').value = it_MG_output_material_general[3].base_UOM;
        document.getElementById('MG_material_group4').value = it_MG_output_material_general[3].material_group;
        document.getElementById('MG_system_field_message_type4').value = it_MG_output_material_general[3].system_field_message_type;
        document.getElementById('MG_system_field_message_description4').value = it_MG_output_material_general[3].system_field_message_description;
        }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_copy_output_screen_U(it_MP_output_material_plant)
{
    if (it_MP_output_material_plant.length >= 1)
    {
        document.getElementById('MP_material1').value = it_MP_output_material_plant[0].material;
        document.getElementById('MP_plant1').value = it_MP_output_material_plant[0].plant;
        document.getElementById('MP_reorder_point1').value = it_MP_output_material_plant[0].reorder_point;
        document.getElementById('MP_moving_average_price1').value = it_MP_output_material_plant[0].moving_average_price; 
        document.getElementById('MP_system_field_message_type1').value = it_MP_output_material_plant[0].system_field_message_type;
        document.getElementById('MP_system_field_message_description1').value = it_MP_output_material_plant[0].system_field_message_description;
    }
    
    if (it_MP_output_material_plant.length >= 2)
    {
        document.getElementById('MP_material2').value = it_MP_output_material_plant[1].material;
        document.getElementById('MP_plant2').value = it_MP_output_material_plant[1].plant;
        document.getElementById('MP_reorder_point2').value = it_MP_output_material_plant[1].reorder_point;
        document.getElementById('MP_moving_average_price2').value = it_MP_output_material_plant[1].moving_average_price; 
        document.getElementById('MP_system_field_message_type2').value = it_MP_output_material_plant[1].system_field_message_type;
        document.getElementById('MP_system_field_message_description2').value = it_MP_output_material_plant[1].system_field_message_description;
    }

    if (it_MP_output_material_plant.length >= 3)
    {
        document.getElementById('MP_material3').value = it_MP_output_material_plant[2].material;
        document.getElementById('MP_plant3').value = it_MP_output_material_plant[2].plant;
        document.getElementById('MP_reorder_point3').value = it_MP_output_material_plant[2].reorder_point;
        document.getElementById('MP_moving_average_price3').value = it_MP_output_material_plant[2].moving_average_price; 
        document.getElementById('MP_system_field_message_type3').value = it_MP_output_material_plant[2].system_field_message_type;
        document.getElementById('MP_system_field_message_description3').value = it_MP_output_material_plant[2].system_field_message_description;
    }  
    
    if (it_MP_output_material_plant.length >= 4)
    {
        document.getElementById('MP_material4').value = it_MP_output_material_plant[3].material;
        document.getElementById('MP_plant4').value = it_MP_output_material_plant[3].plant;
        document.getElementById('MP_reorder_point4').value = it_MP_output_material_plant[3].reorder_point;
        document.getElementById('MP_moving_average_price4').value = it_MP_output_material_plant[3].moving_average_price; 
        document.getElementById('MP_system_field_message_type4').value = it_MP_output_material_plant[3].system_field_message_type;
        document.getElementById('MP_system_field_message_description4').value = it_MP_output_material_plant[3].system_field_message_description;
    }      
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_copy_output_screen_U(it_MSL_output_material_storage_location)
{
    if (lt_MSL_output_material_storage_location.length >= 1)
    {
        document.getElementById('MSL_material1').value = lt_MSL_output_material_storage_location[0].material;
        document.getElementById('MSL_plant1').value = lt_MSL_output_material_storage_location[0].plant;
        document.getElementById('MSL_storage_location1').value = lt_MSL_output_material_storage_location[0].storage_location;
        document.getElementById('MSL_storage_bin1').value = lt_MSL_output_material_storage_location[0].storage_bin; 
        document.getElementById('MSL_system_field_message_type1').value = lt_MSL_output_material_storage_location[0].system_field_message_type;
        document.getElementById('MSL_system_field_message_description1').value = lt_MSL_output_material_storage_location[0].system_field_message_description;
    }

    if (lt_MSL_output_material_storage_location.length >= 2)
    {
        document.getElementById('MSL_material2').value = lt_MSL_output_material_storage_location[1].material;
        document.getElementById('MSL_plant2').value = lt_MSL_output_material_storage_location[1].plant;
        document.getElementById('MSL_storage_location2').value = lt_MSL_output_material_storage_location[1].storage_location;
        document.getElementById('MSL_storage_bin2').value = lt_MSL_output_material_storage_location[1].storage_bin; 
        document.getElementById('MSL_system_field_message_type2').value = lt_MSL_output_material_storage_location[1].system_field_message_type;
        document.getElementById('MSL_system_field_message_description2').value = lt_MSL_output_material_storage_location[1].system_field_message_description;
    } 
    
    if (lt_MSL_output_material_storage_location.length >= 3)
    {
        document.getElementById('MSL_material3').value = lt_MSL_output_material_storage_location[2].material;
        document.getElementById('MSL_plant3').value = lt_MSL_output_material_storage_location[2].plant;
        document.getElementById('MSL_storage_location3').value = lt_MSL_output_material_storage_location[2].storage_location;
        document.getElementById('MSL_storage_bin3').value = lt_MSL_output_material_storage_location[2].storage_bin; 
        document.getElementById('MSL_system_field_message_type3').value = lt_MSL_output_material_storage_location[2].system_field_message_type;
        document.getElementById('MSL_system_field_message_description3').value = lt_MSL_output_material_storage_location[2].system_field_message_description;
    }
    
    if (lt_MSL_output_material_storage_location.length >= 4)
    {
        document.getElementById('MSL_material4').value = lt_MSL_output_material_storage_location[3].material;
        document.getElementById('MSL_plant4').value = lt_MSL_output_material_storage_location[3].plant;
        document.getElementById('MSL_storage_location4').value = lt_MSL_output_material_storage_location[3].storage_location;
        document.getElementById('MSL_storage_bin4').value = lt_MSL_output_material_storage_location[3].storage_bin; 
        document.getElementById('MSL_system_field_message_type4').value = lt_MSL_output_material_storage_location[3].system_field_message_type;
        document.getElementById('MSL_system_field_message_description4').value = lt_MSL_output_material_storage_location[3].system_field_message_description;
    }        
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_copy_screen_input_D(iv_tenant)
{
    var l_material = '';

    l_material = document.getElementById('MG_material1').value;
    if ( l_material != '')
    {
        lt_MG_input_material_general[0] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MG_material1').value,
            material_type : '',
            material_description : '',
            base_UOM : '',
            material_group : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MG_material2').value;
    if ( l_material != '')
    {
        lt_MG_input_material_general[1] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MG_material2').value,
            material_type : '',
            material_description : '',
            base_UOM : '',
            material_group : '',
            system_field_message_type : '',
            system_field_message_description : ''
        }; 
    }

    l_material = document.getElementById('MG_material3').value;
    if ( l_material != '')
    {    
        lt_MG_input_material_general[2] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MG_material3').value,
            material_type : '',
            material_description : '',
            base_UOM : '',
            material_group : '',
            system_field_message_type : '',
            system_field_message_description : ''
        }; 
    }

    l_material = document.getElementById('MG_material4').value;
    if ( l_material != '')
    {     
        lt_MG_input_material_general[3] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MG_material4').value,
            material_type : '',
            material_description : '',
            base_UOM : '',
            material_group : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };        
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_copy_screen_input_D(iv_tenant)
{
    l_material = document.getElementById('MP_material1').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[0] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MP_material1').value,
            plant : document.getElementById('MP_plant1').value,
            reorder_point : '',
            moving_average_price : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MP_material2').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[1] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MP_material2').value,
            plant : document.getElementById('MP_plant2').value,
            reorder_point : '',
            moving_average_price : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MP_material3').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[2] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MP_material3').value,
            plant : document.getElementById('MP_plant3').value,
            reorder_point : '',
            moving_average_price : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }    

    l_material = document.getElementById('MP_material4').value;
    if ( l_material != '')
    {
        lt_MP_input_material_plant[3] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MP_material4').value,
            plant : document.getElementById('MP_plant4').value,
            reorder_point : '',
            moving_average_price : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }    
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_copy_screen_input_D(iv_tenant)
{
    l_material = document.getElementById('MSL_material1').value;

    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[0] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MSL_material1').value,
            plant : document.getElementById('MSL_plant1').value,
            storage_location : document.getElementById('MSL_storage_location1').value,
            storage_bin : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MSL_material2').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[1] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MSL_material2').value,
            plant : document.getElementById('MSL_plant2').value,
            storage_location : document.getElementById('MSL_storage_location2').value,
            storage_bin : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MSL_material3').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[2] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MSL_material3').value,
            plant : document.getElementById('MSL_plant3').value,
            storage_location : document.getElementById('MSL_storage_location3').value,
            storage_bin : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }

    l_material = document.getElementById('MSL_material4').value;
    if ( l_material != '')
    {
        lt_MSL_input_material_storage_location[3] =
        {
            tenant : iv_tenant,
            material : document.getElementById('MSL_material4').value,
            plant : document.getElementById('MSL_plant4').value,
            storage_location : document.getElementById('MSL_storage_location4').value,
            storage_bin : '',
            system_field_message_type : '',
            system_field_message_description : ''
        };
    }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MG_copy_output_screen_D(it_MG_output_material_general)
{
    if (it_MG_output_material_general.length >= 1)
        {
        document.getElementById('MG_material1').value = it_MG_output_material_general[0].material;
        document.getElementById('MG_material_type1').value = it_MG_output_material_general[0].material_type;
        document.getElementById('MG_material_description1').value = it_MG_output_material_general[0].material_description;
        document.getElementById('MG_base_UOM1').value = it_MG_output_material_general[0].base_UOM; 
        document.getElementById('MG_material_group1').value = it_MG_output_material_general[0].material_group;
        document.getElementById('MG_system_field_message_type1').value = it_MG_output_material_general[0].system_field_message_type;
        document.getElementById('MG_system_field_message_description1').value = it_MG_output_material_general[0].system_field_message_description;
        }
    
        if (it_MG_output_material_general.length >= 2)
        {    
        document.getElementById('MG_material2').value = it_MG_output_material_general[1].material;
        document.getElementById('MG_material_type2').value = it_MG_output_material_general[1].material_type;
        document.getElementById('MG_material_description2').value = it_MG_output_material_general[1].material_description;
        document.getElementById('MG_base_UOM2').value = it_MG_output_material_general[1].base_UOM;
        document.getElementById('MG_material_group2').value = it_MG_output_material_general[1].material_group;
        document.getElementById('MG_system_field_message_type2').value = it_MG_output_material_general[1].system_field_message_type;
        document.getElementById('MG_system_field_message_description2').value = it_MG_output_material_general[1].system_field_message_description;  
        }
    
        if (it_MG_output_material_general.length >= 3)
        {        
        document.getElementById('MG_material3').value = it_MG_output_material_general[2].material;
        document.getElementById('MG_material_type3').value = it_MG_output_material_general[2].material_type;
        document.getElementById('MG_material_description3').value = it_MG_output_material_general[2].material_description;
        document.getElementById('MG_base_UOM3').value = it_MG_output_material_general[2].base_UOM;
        document.getElementById('MG_material_group3').value = it_MG_output_material_general[2].material_group;
        document.getElementById('MG_system_field_message_type3').value = it_MG_output_material_general[2].system_field_message_type;
        document.getElementById('MG_system_field_message_description3').value = it_MG_output_material_general[2].system_field_message_description;  
        }
    
        if (it_MG_output_material_general.length >= 4)
        {            
        document.getElementById('MG_material4').value = it_MG_output_material_general[3].material;
        document.getElementById('MG_material_type4').value = it_MG_output_material_general[3].material_type;
        document.getElementById('MG_material_description4').value = it_MG_output_material_general[3].material_description;
        document.getElementById('MG_base_UOM4').value = it_MG_output_material_general[3].base_UOM;
        document.getElementById('MG_material_group4').value = it_MG_output_material_general[3].material_group;
        document.getElementById('MG_system_field_message_type4').value = it_MG_output_material_general[3].system_field_message_type;
        document.getElementById('MG_system_field_message_description4').value = it_MG_output_material_general[3].system_field_message_description;
        }
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MP_copy_output_screen_D(it_MP_output_material_plant)
{
    if (it_MP_output_material_plant.length >= 1)
    {
        document.getElementById('MP_material1').value = it_MP_output_material_plant[0].material;
        document.getElementById('MP_plant1').value = it_MP_output_material_plant[0].plant;
        document.getElementById('MP_reorder_point1').value = it_MP_output_material_plant[0].reorder_point;
        document.getElementById('MP_moving_average_price1').value = it_MP_output_material_plant[0].moving_average_price; 
        document.getElementById('MP_system_field_message_type1').value = it_MP_output_material_plant[0].system_field_message_type;
        document.getElementById('MP_system_field_message_description1').value = it_MP_output_material_plant[0].system_field_message_description;
    }
    
    if (it_MP_output_material_plant.length >= 2)
    {
        document.getElementById('MP_material2').value = it_MP_output_material_plant[1].material;
        document.getElementById('MP_plant2').value = it_MP_output_material_plant[1].plant;
        document.getElementById('MP_reorder_point2').value = it_MP_output_material_plant[1].reorder_point;
        document.getElementById('MP_moving_average_price2').value = it_MP_output_material_plant[1].moving_average_price; 
        document.getElementById('MP_system_field_message_type2').value = it_MP_output_material_plant[1].system_field_message_type;
        document.getElementById('MP_system_field_message_description2').value = it_MP_output_material_plant[1].system_field_message_description;
    }

    if (it_MP_output_material_plant.length >= 3)
    {
        document.getElementById('MP_material3').value = it_MP_output_material_plant[2].material;
        document.getElementById('MP_plant3').value = it_MP_output_material_plant[2].plant;
        document.getElementById('MP_reorder_point3').value = it_MP_output_material_plant[2].reorder_point;
        document.getElementById('MP_moving_average_price3').value = it_MP_output_material_plant[2].moving_average_price; 
        document.getElementById('MP_system_field_message_type3').value = it_MP_output_material_plant[2].system_field_message_type;
        document.getElementById('MP_system_field_message_description3').value = it_MP_output_material_plant[2].system_field_message_description;
    }  
    
    if (it_MP_output_material_plant.length >= 4)
    {
        document.getElementById('MP_material4').value = it_MP_output_material_plant[3].material;
        document.getElementById('MP_plant4').value = it_MP_output_material_plant[3].plant;
        document.getElementById('MP_reorder_point4').value = it_MP_output_material_plant[3].reorder_point;
        document.getElementById('MP_moving_average_price4').value = it_MP_output_material_plant[3].moving_average_price; 
        document.getElementById('MP_system_field_message_type4').value = it_MP_output_material_plant[3].system_field_message_type;
        document.getElementById('MP_system_field_message_description4').value = it_MP_output_material_plant[3].system_field_message_description;
    }      
}    


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function MSL_copy_output_screen_D(it_MSL_output_material_storage_location)
{
    if (lt_MSL_output_material_storage_location.length >= 1)
    {
        document.getElementById('MSL_material1').value = lt_MSL_output_material_storage_location[0].material;
        document.getElementById('MSL_plant1').value = lt_MSL_output_material_storage_location[0].plant;
        document.getElementById('MSL_storage_location1').value = lt_MSL_output_material_storage_location[0].storage_location;
        document.getElementById('MSL_storage_bin1').value = lt_MSL_output_material_storage_location[0].storage_bin; 
        document.getElementById('MSL_system_field_message_type1').value = lt_MSL_output_material_storage_location[0].system_field_message_type;
        document.getElementById('MSL_system_field_message_description1').value = lt_MSL_output_material_storage_location[0].system_field_message_description;
    }

    if (lt_MSL_output_material_storage_location.length >= 2)
    {
        document.getElementById('MSL_material2').value = lt_MSL_output_material_storage_location[1].material;
        document.getElementById('MSL_plant2').value = lt_MSL_output_material_storage_location[1].plant;
        document.getElementById('MSL_storage_location2').value = lt_MSL_output_material_storage_location[1].storage_location;
        document.getElementById('MSL_storage_bin2').value = lt_MSL_output_material_storage_location[1].storage_bin; 
        document.getElementById('MSL_system_field_message_type2').value = lt_MSL_output_material_storage_location[1].system_field_message_type;
        document.getElementById('MSL_system_field_message_description2').value = lt_MSL_output_material_storage_location[1].system_field_message_description;
    } 
    
    if (lt_MSL_output_material_storage_location.length >= 3)
    {
        document.getElementById('MSL_material3').value = lt_MSL_output_material_storage_location[2].material;
        document.getElementById('MSL_plant3').value = lt_MSL_output_material_storage_location[2].plant;
        document.getElementById('MSL_storage_location3').value = lt_MSL_output_material_storage_location[2].storage_location;
        document.getElementById('MSL_storage_bin3').value = lt_MSL_output_material_storage_location[2].storage_bin; 
        document.getElementById('MSL_system_field_message_type3').value = lt_MSL_output_material_storage_location[2].system_field_message_type;
        document.getElementById('MSL_system_field_message_description3').value = lt_MSL_output_material_storage_location[2].system_field_message_description;
    }
    
    if (lt_MSL_output_material_storage_location.length >= 4)
    {
        document.getElementById('MSL_material4').value = lt_MSL_output_material_storage_location[3].material;
        document.getElementById('MSL_plant4').value = lt_MSL_output_material_storage_location[3].plant;
        document.getElementById('MSL_storage_location4').value = lt_MSL_output_material_storage_location[3].storage_location;
        document.getElementById('MSL_storage_bin4').value = lt_MSL_output_material_storage_location[3].storage_bin; 
        document.getElementById('MSL_system_field_message_type4').value = lt_MSL_output_material_storage_location[3].system_field_message_type;
        document.getElementById('MSL_system_field_message_description4').value = lt_MSL_output_material_storage_location[3].system_field_message_description;
    }        
}


//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
function submitForm(event){
    event.preventDefault();
//    console.log(lt_MG_input_material_general[1].material_description.value);
}

