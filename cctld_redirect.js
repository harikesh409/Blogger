  /* Get the full URL of the current blogger page */
  var blog = document.location.href.toLowerCase();

  /* Do not redirect if the domain is .com already */
  if (!blog.match(/\.blogspot\.com/)) {

    /* Replace the country TLD with .com and ncr switch */
    blog = blog.replace(/\.blogspot\..*?\//, ".blogspot.com/ncr/");

    /* Redirect to the new .com URL in the current tab */
    window.location.replace(blog);
  }
