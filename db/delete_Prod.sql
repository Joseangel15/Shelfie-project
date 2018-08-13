UPDATE Shelves
SET product_name = null, product_price = null
WHERE letter_id = $1;

select * from Shelves;

