


//Choose your drink
function chooseDrink()
{ 
let response;
let favDrink = prompt("What's your favorite drink?").toLowerCase();
switch(favDrink) 
{
  case "coke":
    response = "Excellent choice! We have Coca-Cola .";
    alert(response);
     vendingMachine() ;
    break;

  case "pepsi":
    response = "OOpps! We don't have Pepsi";
    alert(response);
     vendingMachine() ;
    break;

  case "sprite":
    response = "Really? We don't have Sprite now";
    	alert(response);
    	 vendingMachine() ;
    break;

  default:
    response = "Please check these drinks out!";
    alert(response);
    vendingMachine() ;
}
}

//Function definition for purchasing from vending machine items
function vendingMachine() 
{
	let pick = prompt("Here are the drinks we got!\n" + "Enter 1. for Diet Coke\n" + "2. for Regular  Code\n" +
		"3. for Bottled Water\n" + "0. to exit");
	
	let itemQuantity = 0;
	let payment = 0;
	let balance = 0;
	let price = 0;

	do {																	//Do - while loop for if - else if  decision control statements flow

		if (pick == 1 || pick == 2) 
		{
			itemQuantity = prompt("How many cokes do you want ? ");
																			//This gets quantity of items to be purchased

				alert("Total price = $ " + itemQuantity * 2 );
			    price = itemQuantity * 2;

				payment = prompt("Please enter payment amount"); 
				alert("You entered: $" + payment);

			if (payment < price) 
			{								//If - else if decision control statements flow for this function
					alert("Please complete your payment");
					balance = price - payment;

					alert("Your remaining payment is: $" + balance );
					vendingMachine();
					break;
				}	
			else if (payment > price) 
			{
					balance = payment - price;
					alert("Your balance is: $" + balance + ".  Thank you!");
				break;
				}
			else if(payment == price) 
			{ 
					alert("Thank you for your petronage");
				} 
			else 
						
			{
					  alert("All payments must start from 1$");
					  vendingMachine();
					  break;
						}
					}


else if (pick == 3)
		{
			itemQuantity = prompt("How many bottled water do you want ? ");

		 		alert("Total price = $ " + itemQuantity * 2.50);
                price = itemQuantity * 2.50;

				payment = prompt("Please enter payment amount");
				alert("You entered: $" + payment);

				if (payment < price) 
				{
				alert("Please complete your payment");

				balance = price - payment;

				alert("Your remaining payment is: $" + balance );
				vendingMachine();
				}

				else if (payment > price) 
				{

				balance = payment - price;
				alert("Please collect your balance : $" + balance + " Thank you!");
				break;
				}
				else
				{
					alert("All payments must start from 1$");
					vendingMachine();
					break;
					  }
			}


else
		{
		alert("Invalid entry");
		break;

		}

	} while (pick != 0);
	alert("You are leaving our vending Machine\n" + "Press enter");

	
}




//Function definition for viewing accounts menu
function showAccountsMenu() 
{

	alert("1. Check balance\n"+ "2. Deposit\n" +
	 			"3. Withdraw\n" + "4. Exit");

		
}


 //Function definition for account transactions
 function accountTransactions() 
 {
 	let option;
 	let balance = Number(0);

 	do {				
		showAccountsMenu();

		let input = parseInt(prompt("Please select an option, 0 to 4"));
	
			option = input;
		
	switch (option) 
	{						
		case 1:
			alert("Your balance is:  $" + balance );
			break;

		case 2:
			alert("Enter deposit amount: ");
			let depositAmount  = Number(prompt("Enter a deposit amount"));
			balance += depositAmount;
			option = input;
			break;

			case 3:
					alert("Enter the amount you want withdraw: ");
					let withdrawAmount = prompt("Enter amount you want to withdraw?");
		
					if (withdrawAmount <= balance)
					{
					balance -= withdrawAmount;
				
					}

					else 
					{
					alert("You don't have enough money in your account");
					}
					break;

					default:
					alert("Invalid entry");
					}


	} 
	while (option != 4);
	alert("You are exiting this option!\n" + "Press enter" );

}




//Function definition for viewing calculator menu
function calculatorMenu() {

	
	alert("Select operation\n" + "1. Addition \n" + "2. Subtraction \n" +
		"3. Multiplication \n" + "4. Division \n" + "5. Exponent \n" +
		 "6. Squaroot \n" +	"7. to exit ");
}


//Function definition for using calculator
function useCalculator() {

	
	let selection;

	do {			

				let num1 = Number(prompt("Enter first number"));		
				let num2 = Number(prompt("Enter second number"));
												
		
		calculatorMenu();

		let number = Number(prompt("Select math operation"));

		selection = (number);

		switch (selection) {												//Switch statements decision flow for the calculator

		case 1:  alert("Anser is :  " + (num1 + num2) );
						break;

		case 2:  alert("Anser is :  " + (num1 - num2));
						 break;

		case 3:  alert("Anser is :  " + (num1 * num2));
						 break;

		case 4:  alert("Anser is :  " + (num1 / num2));
						 break;

		case 5:  alert("Anser is :  " + Math.pow(num1, num2) );
						 break;

		case 6:  alert(" Squar root of num1 = " + Math.sqrt(num1) + " : Squar root of num2 = " + Math.sqrt(num2) );
						 break;

		default:
				 		alert("Please select a valid operation ");
				  	break;
				}
		
        
	
} 
while (selection != 7);
	alert("You are exiting this option!\n" + "Press enter");
    

}




//Function definition for playing even and odd number game
function isOddOrEvenNumber() {

	let number = Number(prompt("Enter a number"));
	
	if (number <= 0) {														
		alert("Invlid number");
	}

	else if (number % 2 == 0) {
		alert("This is even number");

	}

	else {
		alert("This is odd number ");

	}

}




//Function definition for temperature conversion
function tempConversion() {

	let frht = Number(0);
	let celsius = Number(0);
	let option ;

	do {																	

		alert("Which temperature conversion do you want ?");
		let input = prompt("1 to convert to Fahrenheit\n" + "2. to conver to Celsius\n" + "3. to exit\n");
		option = input;

		if (option == 1) {													
			celsius = prompt("Enter Celsius temperature");
		
			frht = (celsius * 9 / 5) + 32;
			alert("Fahrenheit temperature is : " + frht);
		}
		else if (option == 2) {
			frht = prompt("Enter Fahrenheit temperature");
			
			celsius = (frht - 32) *( 5 / 9);
			alert("Celsius temperature is : " + celsius);
		}

		else if (option == 3) {
			alert("You are exiting this program");
			break;
		}

		else {
			alert("Wrong input ...");

			}
	} 

	while (option != 3);
	alert("You exited this option!\n" + "Press enter or click ok");
}




