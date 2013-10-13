  $(document).ready(function(){
			
		setInterval(function(){
					$("#overzicht1").load('overzicht.php');
				}, 1000);
		
					
							 $( "#opm" ).click(function() {
					
						    $("#opmerkingen").css("display","block").fadeIn(2000);
						
							

						});
								 $( "#close_o" ).click(function() {
					
						    $("#opmerkingen").css("display","none").fadeOut(2000);
						
							

						});
				
			 $( ".begint" ).click(function() {
			  
					var begintijd = $( ".begint" ).val();
								
					if(begintijd == "l_uur9")
					  {	
						
						$(".eindt option[value='l_uur10']").show();
						$(".eindt option[value='l_uur11']").show();
						$(".eindt option[value='l_uur12']").show();
						$(".eindt option[value='l_uur13']").show();
						$(".eindt option[value='l_uur14']").hide();
						$(".eindt option[value='l_uur15']").hide();
						$(".eindt option[value='l_uur16']").hide();
						$(".eindt option[value='l_uur17']").hide();
						$(".eindt option[value='l_uur18']").hide();
						$(".eindt option[value='l_uur19']").hide();
						$(".eindt option[value='l_uur20']").hide();
						$(".eindt option[value='l_uur21']").hide();
						$(".eindt option[value='l_uur22']").hide();
						$(".eindt option[value='l_uur23']").hide();
						$(".eindt option[value='l_uur24']").hide();
					  }
					  
					  if(begintijd == "l_uur10")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").show();
						$(".eindt option[value='l_uur12']").show();
						$(".eindt option[value='l_uur13']").show();
						$(".eindt option[value='l_uur14']").show();
						$(".eindt option[value='l_uur15']").hide();
						$(".eindt option[value='l_uur16']").hide();
						$(".eindt option[value='l_uur17']").hide();
						$(".eindt option[value='l_uur18']").hide();
						$(".eindt option[value='l_uur19']").hide();
						$(".eindt option[value='l_uur20']").hide();
						$(".eindt option[value='l_uur21']").hide();
						$(".eindt option[value='l_uur22']").hide();
						$(".eindt option[value='l_uur23']").hide();
						$(".eindt option[value='l_uur24']").hide();
					  }
					  
					   if(begintijd == "l_uur11")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").show();
						$(".eindt option[value='l_uur13']").show();
						$(".eindt option[value='l_uur14']").show();
						$(".eindt option[value='l_uur15']").show();
						$(".eindt option[value='l_uur16']").hide();
						$(".eindt option[value='l_uur17']").hide();
						$(".eindt option[value='l_uur18']").hide();
						$(".eindt option[value='l_uur19']").hide();
						$(".eindt option[value='l_uur20']").hide();
						$(".eindt option[value='l_uur21']").hide();
						$(".eindt option[value='l_uur22']").hide();
						$(".eindt option[value='l_uur23']").hide();
						$(".eindt option[value='l_uur24']").hide();
					  }
				  
				
			
					   if(begintijd == "l_uur12")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").hide();
						$(".eindt option[value='l_uur13']").show();
						$(".eindt option[value='l_uur14']").show();
						$(".eindt option[value='l_uur15']").show();
						$(".eindt option[value='l_uur16']").show();
						$(".eindt option[value='l_uur17']").hide();
						$(".eindt option[value='l_uur18']").hide();
						$(".eindt option[value='l_uur19']").hide();
						$(".eindt option[value='l_uur20']").hide();
						$(".eindt option[value='l_uur21']").hide();
						$(".eindt option[value='l_uur22']").hide();
						$(".eindt option[value='l_uur23']").hide();
						$(".eindt option[value='l_uur24']").hide();
					  }
					
					   if(begintijd == "l_uur13")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").hide();
						$(".eindt option[value='l_uur13']").hide();
						$(".eindt option[value='l_uur14']").show();
						$(".eindt option[value='l_uur15']").show();
						$(".eindt option[value='l_uur16']").show();
						$(".eindt option[value='l_uur17']").show();
						$(".eindt option[value='l_uur18']").hide();
						$(".eindt option[value='l_uur19']").hide();
						$(".eindt option[value='l_uur20']").hide();
						$(".eindt option[value='l_uur21']").hide();
						$(".eindt option[value='l_uur22']").hide();
						$(".eindt option[value='l_uur23']").hide();
						$(".eindt option[value='l_uur24']").hide();
					  }
				  
					   if(begintijd == "l_uur14")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").hide();
						$(".eindt option[value='l_uur13']").hide();
						$(".eindt option[value='l_uur14']").hide();
						$(".eindt option[value='l_uur15']").show();
						$(".eindt option[value='l_uur16']").show();
						$(".eindt option[value='l_uur17']").show();
						$(".eindt option[value='l_uur18']").show();
						$(".eindt option[value='l_uur19']").hide();
						$(".eindt option[value='l_uur20']").hide();
						$(".eindt option[value='l_uur21']").hide();
						$(".eindt option[value='l_uur22']").hide();
						$(".eindt option[value='l_uur23']").hide();
						$(".eindt option[value='l_uur24']").hide();
					  }

					   if(begintijd == "l_uur15")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").hide();
						$(".eindt option[value='l_uur13']").hide();
						$(".eindt option[value='l_uur14']").hide();
						$(".eindt option[value='l_uur15']").hide();
						$(".eindt option[value='l_uur16']").show();
						$(".eindt option[value='l_uur17']").show();
						$(".eindt option[value='l_uur18']").show();
						$(".eindt option[value='l_uur19']").show();
						$(".eindt option[value='l_uur20']").hide();
						$(".eindt option[value='l_uur21']").hide();
						$(".eindt option[value='l_uur22']").hide();
						$(".eindt option[value='l_uur23']").hide();
						$(".eindt option[value='l_uur24']").hide();
					  }
					  
					   if(begintijd == "l_uur16")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").hide();
						$(".eindt option[value='l_uur13']").hide();
						$(".eindt option[value='l_uur14']").hide();
						$(".eindt option[value='l_uur15']").hide();
						$(".eindt option[value='l_uur16']").hide();
						$(".eindt option[value='l_uur17']").show();
						$(".eindt option[value='l_uur18']").show();
						$(".eindt option[value='l_uur19']").show();
						$(".eindt option[value='l_uur20']").show();
						$(".eindt option[value='l_uur21']").hide();
						$(".eindt option[value='l_uur22']").hide();
						$(".eindt option[value='l_uur23']").hide();
						$(".eindt option[value='l_uur24']").hide();
					  }

					   if(begintijd == "l_uur17")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").hide();
						$(".eindt option[value='l_uur13']").hide();
						$(".eindt option[value='l_uur14']").hide();
						$(".eindt option[value='l_uur15']").hide();
						$(".eindt option[value='l_uur16']").hide();
						$(".eindt option[value='l_uur17']").hide();
						$(".eindt option[value='l_uur18']").show();
						$(".eindt option[value='l_uur19']").show();
						$(".eindt option[value='l_uur20']").show();
						$(".eindt option[value='l_uur21']").show();
						$(".eindt option[value='l_uur22']").hide();
						$(".eindt option[value='l_uur23']").hide();
						$(".eindt option[value='l_uur24']").hide();
					  }		
					  
					   if(begintijd == "l_uur18")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").hide();
						$(".eindt option[value='l_uur13']").hide();
						$(".eindt option[value='l_uur14']").hide();
						$(".eindt option[value='l_uur15']").hide();
						$(".eindt option[value='l_uur16']").hide();
						$(".eindt option[value='l_uur17']").hide();
						$(".eindt option[value='l_uur18']").hide();
						$(".eindt option[value='l_uur19']").show();
						$(".eindt option[value='l_uur20']").show();
						$(".eindt option[value='l_uur21']").show();
						$(".eindt option[value='l_uur22']").show();
						$(".eindt option[value='l_uur23']").hide();
						$(".eindt option[value='l_uur24']").hide();
					  }
					  
					   if(begintijd == "l_uur19")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").hide();
						$(".eindt option[value='l_uur13']").hide();
						$(".eindt option[value='l_uur14']").hide();
						$(".eindt option[value='l_uur15']").hide();
						$(".eindt option[value='l_uur16']").hide();
						$(".eindt option[value='l_uur17']").hide();
						$(".eindt option[value='l_uur18']").hide();
						$(".eindt option[value='l_uur19']").hide();
						$(".eindt option[value='l_uur20']").show();
						$(".eindt option[value='l_uur21']").show();
						$(".eindt option[value='l_uur22']").show();
						$(".eindt option[value='l_uur23']").show();
						$(".eindt option[value='l_uur24']").hide();
					  }
					  
						if(begintijd == "l_uur20")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").hide();
						$(".eindt option[value='l_uur13']").hide();
						$(".eindt option[value='l_uur14']").hide();
						$(".eindt option[value='l_uur15']").hide();
						$(".eindt option[value='l_uur16']").hide();
						$(".eindt option[value='l_uur17']").hide();
						$(".eindt option[value='l_uur18']").hide();
						$(".eindt option[value='l_uur19']").hide();
						$(".eindt option[value='l_uur20']").show();
						$(".eindt option[value='l_uur21']").show();
						$(".eindt option[value='l_uur22']").show();
						$(".eindt option[value='l_uur23']").show();
						$(".eindt option[value='l_uur24']").hide();
					  }
					  
					  if(begintijd == "l_uur21")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").hide();
						$(".eindt option[value='l_uur13']").hide();
						$(".eindt option[value='l_uur14']").hide();
						$(".eindt option[value='l_uur15']").hide();
						$(".eindt option[value='l_uur16']").hide();
						$(".eindt option[value='l_uur17']").hide();
						$(".eindt option[value='l_uur18']").hide();
						$(".eindt option[value='l_uur19']").hide();
						$(".eindt option[value='l_uur20']").hide();
						$(".eindt option[value='l_uur21']").hide();
						$(".eindt option[value='l_uur22']").show();
						$(".eindt option[value='l_uur23']").show();
						$(".eindt option[value='l_uur24']").show();
					  }
					  
					  if(begintijd == "l_uur22")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").hide();
						$(".eindt option[value='l_uur13']").hide();
						$(".eindt option[value='l_uur14']").hide();
						$(".eindt option[value='l_uur15']").hide();
						$(".eindt option[value='l_uur16']").hide();
						$(".eindt option[value='l_uur17']").hide();
						$(".eindt option[value='l_uur18']").hide();
						$(".eindt option[value='l_uur19']").hide();
						$(".eindt option[value='l_uur20']").hide();
						$(".eindt option[value='l_uur21']").hide();
						$(".eindt option[value='l_uur22']").hide();
						$(".eindt option[value='l_uur23']").show();
						$(".eindt option[value='l_uur24']").show();
					  }
					  
					  if(begintijd == "l_uur23")
					  {
						$(".eindt option[value='l_uur10']").hide();
						$(".eindt option[value='l_uur11']").hide();
						$(".eindt option[value='l_uur12']").hide();
						$(".eindt option[value='l_uur13']").hide();
						$(".eindt option[value='l_uur14']").hide();
						$(".eindt option[value='l_uur15']").hide();
						$(".eindt option[value='l_uur16']").hide();
						$(".eindt option[value='l_uur17']").hide();
						$(".eindt option[value='l_uur18']").hide();
						$(".eindt option[value='l_uur19']").hide();
						$(".eindt option[value='l_uur20']").hide();
						$(".eindt option[value='l_uur21']").hide();
						$(".eindt option[value='l_uur22']").hide();
						$(".eindt option[value='l_uur23']").hide();
						$(".eindt option[value='l_uur24']").show();
					  }
					  
				});	

            });