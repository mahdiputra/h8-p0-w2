//soal nomor 1

      var deret = 1;
      var deret2 = 20;

        console.log('LOOPING PERTAMA')
        while(deret <= 20)
        {
          if(deret%2==0)
          console.log(deret + ' - i love coding');
          deret++
        }
        console.log('LOOPING KEDUA')
        while(deret2 >= 1 )
        {
          if (deret2%2==0)
          console.log(deret2 + ' -i will become fullstack developer ');
          deret2--
        }

//soal nomor 2

       console.log('LOOPING PERTAMA')
        for(var i =1 ; i <= 20; i++)
        {
          console.log(i +' i love coding')
        }
        console.log('LOOPING KEDUA')
        for(var i=20;i>=1; i--)
        {
          console.log(i + ' i will become fullstack developer')
        }

//soal nomor 3

        for(var count = 1 ; count < 100 ; count++)
          {
              console.log(count);
          }

 //point 2

          for(var count = 1 ; count < 100 ; count++)
          {
              if (count % 2 === 0 )
              {
                  console.log(count);
                  console.log('GENAP');
              } else
              {
                  console.log(count);
                  console.log('GANJIL');
              }
          }

//point 3

          for(var count = 1 ; count < 100 ; count+=2)
          {
              if(count % 3 === 0)
              {
              console.log(count + ' adalah kelipatan 3');
              }
          }


          for(var count= 1 ; count < 100 ; count+=5)
          {
              if(count%6===0)
              {
                  console.log(count + " adalah kelipatan 6");
              }
          }

          for(var count=1; count<= 100 ; count+=9)
          {
              if(count%10 === 0 )
              {
                  console.log(count + ' adalah kelipatan 10');
              }
          }
