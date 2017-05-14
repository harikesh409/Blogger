var snip=document.querySelector("blockquote");
snip.insertAdjacentHTML('afterbegin',"<a href='#' class='fa fa-files-o' style='float:right;text-decoration:none;'></a> ");
var copyBtn = document.querySelector('.fa-files-o');
copyBtn.addEventListener('click', function(event) {
  // Select the text  
  var copybq = document.querySelector('blockquote');
  var range = document.createRange();
  range.selectNode(copybq);
  window.getSelection().addRange(range);

  try {
    // Now that we've selected the anchor text, execute the copy command  
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copied text  was ' + msg);
    showTooltip(event.trigger,'Copied!');
    
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported  
  window.getSelection().removeAllRanges();
});

