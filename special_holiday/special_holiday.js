// Copyright (c) 2022, Makro Tech and contributors
// For license information, please see license.txt
frappe.utils.get_datetime 
{% include "rainmaker/public/js/selling_controller.js" %}



frappe.ui.form.on('Special Holiday', {
	all_day:function(frm){	//alert("byeeeee 'all_day' ");

		//var df =frappe.meta.get_docfield("Special Holiday", cur_frm.doc.start_time);df.read_only = 1;
		cur_frm.set_value('start_time', "00:00");	
		frm.set_df_property('start_time', "read_only", 1);	
		cur_frm.set_value('end_time', "23:59");
		frm.set_df_property('end_time', "read_only", 1);
	
	},
	

	//alert("all_day",frm.doc.all_day);
	/*after_save:function(frm)
	{
		frappe.msgprint("Succesfully Updated Special Holiday ")
	},
	//refresh: function(frm) {*/

		if(all_day)
		{
			cur_frm.set_value('start_time', frappe.get_datetime());

		
		},
});