     //STRINGS IN JAVASCRIPT strings are basically texts 
     //One can use both the single quote or double quotes when defining strings in javascript


     //Using single quotes
     console.log('Juma will soon become a software developer');
      //USING DOUBLE QUOTATION MARKS
     console.log("Coding is fun until you run into bugs");

     //one should always use single quotes while defining strings
     // But there is  sn exception for this : Only use double quotes when the string has a single quote character
     console.log("I'm a software Engineer");

     //ESCAPE CHARACTER
     console.log("I\'m in with software development");
     /* the above line exhibits an escape character in action */
     
     //NEWLINE CHARACTER IN ACTION
     // \n is used to introduce a new line of code fronm the pre existing line of code
     alert("some\n  text");
      //Another concept of creating strings is by use  of backtick
      `Software engineering can be sometimes be difficult if doesnt have the right mentors around him or her`

      //STRINGS THAT ARE CREATED USING BACKTICKS ARE REFFERED TO AS TEMPLATES
      /*TEMPLATE IS A VERY IMMPORTANT WAY OF  DECLARING STRINGS AND IT HAS A SPECIAL 
      FEATURE THAT IM GOING TO DEFINE IT BELOW */
       /*inTERPOLATION IS VERY IMPORTANT FEATURE THAT ARISES FROM TEMPLATE STRINGS
       ITS MAIN FUCTIONALITY IS THAT IT ALLOWS ONE TO BE ABLE TO ADD VALUES TO A STRING */
       `Items (${1+1}) : $${(2095+799) /100}`;

       /* uSE OF BACKTICKS WHILE DECLARING STRINGS HELPS DEVELOPERS TO COMBINE STRINGS WITH INTEGERS */
       `Items (${1+1}): $${(2095+799) / 100 }` //The output of this code is going to be:

       //ANOTHER USEFUL CONCEPTS OF BACKTICKS IS THATIT IS USED TO CREATE MULTI LINE STRINGS
       `Simon
       juma 
       is a 
       software Engineer and a has a very creative mindset which is fulll of authenticity and charisma`;


       /* Juma ordera 1 plate of rice @sh10, a burger at sh30 and one ice cream at sh 50
       using javascript code calculate the total cost bof juma's order */
       let rice = 10;
       let burger = 30;
       let icecream = 50;

       totalPrice = ricePrice + burgerPrice + IcecreamPrice;

       console.log("the total cost is: sh" + totalPrice);
       //the answer to the above example is sh 90

       /* Calculate  the area of a right angled triangle given that it has the following dimensions
       height: 10metres
       base: 12 metres  */
        const h = 10;
        const b = 12;

        area = 0.5*(h * b);
         console.log("The area of the right angle triangle is: m^2" + area);

         /* Calculate  the total cost of a toaster (sh 18.50) and 2 shirts which cost sh 7.50 */
         const toaster = 1850;
         const shirts = 750 * 2;

         totalCost = toasterPrice + shirtPrice;
         
         console.log(("The total cost of the above products is: sh" + totslCost) /100);
         // in the above example the total cost  of the above 2 products is sh = 26

         /*Juma bought 1 plate of ugali @50 , a plate of beef stew @ 100 and 3 cups of tea @ 30 each
         he was later joined with 3  of his friends, we orders the same meal as  juma.
         Using javascript calculate  the total amount of money that juma nad his friends payed to the hotel */
          let ugaliCost = 50;
          let beefstewCost = 100;
          let teaCost = 30;
          
          totalAmount = ugaliCost + beefstewCost + teaCost;
           console.log("The total amount payable by juma and his friends is: sh" +  (ugaliCost + beefstewCost + teaCost));
        