-- 1. Display all the albums along with the name of the associated artist(s)
select al.title as [Album Name], ab.name as [Associated Artist] from albums al left join artists ab on al.ArtistId = ab.ArtistId;

-- 2. Display the first name and last name of all customers along with the first name and last name of their support representative.
select c.firstName as [Customer First Name], c.LastName as [Customer Last Name], e.FirstName as [Representative First Name], e.LastName as [Representative Last Name] from customers c left join employees e on c.SupportRepId = e.EmployeeId;

-- 3. Same as Q2, but only show information for customers associated with companies
select c.firstName ||' '||  c.LastName as [Customer Full Name], e.FirstName ||' '||  e.LastName as [Representative Full Name] from customers c left join employees e on c.SupportRepId = e.EmployeeId where c.company is not null;

-- 4. Display the total number of tracks in each playlist - include the playlist name
select list.name as [Playlist Name], count(track.playlistid) as [Number of Tracks] from playlists list left join playlist_track track on list.PlaylistId = track.PlaylistId group by list.playlistId order by list.PlaylistId;

-- 5.Display the name and number of sales of the top 5 most purchased tracks.
select track.trackId, track.name as [Track Name], sum(item.quantity) as Quantity from invoice_items item inner join tracks track on item.TrackId = track.TrackId  group by item.TrackId order by Quantity desc limit 5;

-- 6. Display the name, number of bytes, and media type of all tracks.
select t.name as [Track Name], t.bytes as [Number of Bytes], m.Name as [Media Type] from tracks t left join media_types m on t.MediaTypeId = m.MediaTypeId;

-- 7. Display all customer first and last names along with their country and the billing country listed on any invoices associated with them.
select  c.firstName ||' '|| c.lastName as [Customer Name], c.country as [Country], i.BillingCountry as [Billing Country] from customers c left join invoices i on c.CustomerId = i.CustomerId;

-- 8. List all track names along with the name of their genre and the album they are on
SELECT t.name as [Track Name], g.name as [Genre Name], a.title as [Album Name] FROM tracks t left JOIN genres g ON t.GenreId = g.GenreId left JOIN albums a ON t.AlbumId = a.AlbumId;

-- 9. List all employees along with the name of their manager.
select e.firstName ||' '||e.lastName as [Employee], m.FirstName ||' '|| m.LastName as [Manager] from employees e left join employees m on e.ReportsTo = m.EmployeeId;

-- 10. List the purchased track names AND artist names for each invoice line item. Note that composer is not the same as artist name (you'll need to join 3 tables)
select  t.name as [Track Name], art.name as [Artist Name] from invoice_items i left join tracks t on i.TrackId = t.TrackId left join albums a on t.AlbumId = a.AlbumId left join artists art on a.ArtistId = art.ArtistId;