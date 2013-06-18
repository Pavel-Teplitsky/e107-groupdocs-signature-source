$(function(){
    // Get GroupDocs button to toolbar
    var toolbar = jQuery.get('#data_toolbar1');
    // Waiting for toolbar initialization
    toolbar.success(function(data) {
        // Add GroupDocs button to toolbar
        var icon = '<td style="position: relative"><a role="button" id="content_grpdocssig" href="javascript:;" class="mceButton mceButtonEnabled mce_grpdocssig" onmousedown="return false;" onclick="return false;" aria-labelledby="content_grpdocssig_voice" title="GroupDocs Signature" tabindex="-1"><span class="mceIcon mce_grpdocssig"><img class="mceIcon" src="../e107_plugins/groupdocs_signature/images/icon_16.png" alt="GroupDocs Signature"></span><span class="mceVoiceLabel mceIconOnly" style="display: none;" id="content_grpdocssig_voice">GroupDocs Signature</span></a></td>';
        var data_toolbar1 = jQuery('#data_toolbar1');
        var last_child = data_toolbar1.find('.mceToolbarEnd');
        last_child.before(icon);
        
        // Toolbar button open action
        jQuery('#content_grpdocssig').bind('click', function(){
            var popupHtml = '<div id="gdsig-dialog"><table id="info-wrapper"> <tr> <td align="right" class="gray dwl_gray"><strong>File ID</strong><br /></td> <td valign="top"> <input name="fileID" type="text" class="opt dwl" id="fileID" style="width:200px;" value="" /><br/><span id="uri-note"></span> </td> </tr> <tr> <td align="right" class="gray dwl_gray"><strong>Height</strong></td> <td valign="top" style="width:200px;"><input name="height" type="text" class="opt dwl" id="height" size="6" style="text-align:right" value="700" />px</td> </tr> <tr> <td align="right" class="gray dwl_gray"><strong>Width</strong></td> <td valign="top"><input name="width" type="text" class="opt dwl" id="width" size="6" style="text-align:right" value="600" />px</td> </tr> </table><div class="mceActionPanel"> <div style="float: left"> <input type="button" id="gdsigInsertCode" name="insert" value="Insert"/> </div> <div style="float: right"> <input type="button" id="gdsigCancel" name="cancel" value="Cancel"/> </div> </div></div>';
            jQuery('#grpdocssig-popup').append(popupHtml);
            jQuery('#grpdocssig-popup').toggle();
            
            // Dialog button insert
            jQuery('#gdsigInsertCode').bind('click', function(){
                var fileID = jQuery('#fileID').val();
                var width = jQuery('#width').val();
                var height = jQuery('#height').val();
                if(fileID!=null && fileID!='' && width!=null && width!='' && height!=null && height!=''){
                    var iframe = '<iframe src="https://apps.groupdocs.com/signature2/forms/SignEmbed/'+fileID+'?&referer=e107-Signature/1.0" frameborder="0" width="'+width+'" height="'+height+'">If you can see this text, your browser does not support iframes. Please enable iframe support in your browser or use the latest version of any popular web browser such as Mozilla Firefox or Google Chrome. For more help, please check our documentation Wiki: http://groupdocs.com/docs/display/signature/GroupDocs+Signature+Integration+with+3rd+Party+Platforms</iframe>';
                    jQuery('#tinymce', jQuery('#data_ifr').contents()).append(iframe);
                }
                jQuery('#gdsig-dialog').remove();
                jQuery('#grpdocssig-popup').toggle();
            });

            // Dialog button close
            jQuery('#gdsigCancel').bind('click', function(){
                jQuery('#gdsig-dialog').remove();
                jQuery('#grpdocssig-popup').toggle();
            });
        });

    });
    // Add popup wrapper
    jQuery('body').append('<div id="grpdocssig-popup"><div id="grpdocssig-dialog-header">GroupDocs Signature</div></div>');
});