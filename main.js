   function f() {
       var v = document.getElementById("countrycode");
       var d = v.options[v.selectedIndex].value;
       let regionNames = new Intl.DisplayNames([d], {type: 'region'});
       document.getElementById("a").textContent=regionNames.of(document.getElementById("countrycode2").value.toUpperCase());
   }
