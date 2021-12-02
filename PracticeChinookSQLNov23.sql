-- 17. Determine how many invoices are in the database
select count(*) as [Total Invoices] from invoices;

-- 18. List only the cities in France that appear in the invoices TABLE
select BillingCity as [French Cities] from invoices where BillingCountry = 'France';

-- 19. List each city in France that appears in the invoices table. List each city only once!
select distinct BillingCity as [French Cities] from invoices where BillingCountry = 'France';

-- 20. Do what you did in 19...but return the list of cities in alphabetical order.
select distinct BillingCity as [French Cities] from invoices where BillingCountry = 'France' order by BillingCity;

-- 21. Do what you did in 20... but change the name of the returned field to 'City Names'
select distinct BillingCity as [City Names] from invoices where BillingCountry = 'France' order by BillingCity;

-- 22. Return a list of all the names of tracks in the database in alphabetical ORDER
select name as [Track Names] from tracks order by name;

-- 23. Return a list of all the Names of tracks in the database in reverse alphabetical order.
select name as [Track Names] from tracks order by name DESC;

-- 24. Determine how many invoices were issued to people from Berlin.
select count(*) as [Total Issued Invoices], BillingCity as City from invoices where BillingCity = 'Berlin';

-- 25. Determine how many invoices were issued to people in each city - with one sql statement
select BillingCity as City, count(*) as [Total Issued Invoices] from invoices group by BillingCity;

-- 26. Redo question 24 using group by and having
select BillingCity as City, count(*) as [Total Issued Invoices] from invoices group by BillingCity having BillingCity = 'Berlin';

-- 27. Display all information from the employees table. Note how many rows are returned.
select ROWID as [Row Number], * from employees

