/*1*/ for ( var i = 0; i < 5; i++)
       {
           console.log ('*');
       }


/*2*/ var baris = '';
      for ( var i = 0; i < 5; i++)
       {
            for (var j= 0; j < 5; j++)
           {
           baris += '*';
           }
           baris += '\n';
       }

       console.log(baris);


/*3*/ var baris = '';
      for ( var i = 0; i < 5; i++)
       {
            for (var j= 0; j <= i; j++)
           {
           baris += '*';
           }
           baris += '\n';
       }

       console.log(baris);
