(((1+2)*3)/4)^5
the integers numbers have type int ,.while those with a fractional part have type float
the / will always return a float
.on the division mathematically its a float ,.then also for the fact that you're using the aparatus ,.it'll return a float
so definitely they'll be a type error bc you're mixing type int and type float ,.
,.another way you can do it is use python eval()function,.it can accept arbitrary expressions like instead of 
having the addition in its set of brackets then a bracket for the multiplication and division.,uneza kuwa na multiple operations 
within the same bracket like(1+2-3*4)..in the spirit of code refactor ,.si you remember how we used to refactor??
like unatoa what's not necessary so that your code runs with the least lnes possible


floor division and get an int istead of a float ,.use // ,.this will discard the remainder in the sense that you only have the 
answer as an int ,.no .remainder