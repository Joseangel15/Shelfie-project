UPDATE Shelves
SET product_name = $1, product_price = $2
WHERE shelve = $3 and bin = $4;