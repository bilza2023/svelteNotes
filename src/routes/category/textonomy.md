lets dig in deep into the concept of taxonomies.

To create a textonomy system i will need follwoing:

1:"textonomies" table
 i will be a table called "textonomies" with fields like "id", "name" . I can then create textonomies like  "tag" , "category" , "status". 

 2:"textonomyEntries" table
This table will contain all the types / options associated with textonomies in textonomies table. Will have fields like "id", "name", textonomyId (this will link textonomyEntries table to "textonomies" table in a one to many relationship);

3: "textonomyRelationship" table
this is the many-to-many relationship table. suppose we have articles table. when we add an article we add tags to it and every entry of the tag and article id is placed here.

keeping this textonomy system (like wordpress) how do i create hierarchical texonomies like categories and sub- categories?. For example I have a textonomy "skillLevel", this has 2 textonomyEntries (options) "technical" and "non_Technical. The technical further has 2 options "computerLiterate" "Not computer Literate" and "non_Technical" also has 2 options. "old" and "young". 
How do we implement this feature using the above system mention all the changes required in tables etc.
Please first summerize the problem.

in any large database system there will a lot of "Select Variables" (Select Variables are variables which can have a value from a set of options. for example the "publishStatus" of an article in the database can have values of "unpublished" or "published", publishStatus can not have any other value );

How do i use the above mentioned textonomy system to create all such "Select Variables" for my app. Give me the detailed explanantion of how will you create publishStatus.

 also=> is Select Variables correct term for this?

 answer
 Your initial idea of creating a "textonomies" table and a "textonomyEntries" table is a good start for creating a taxonomy system. However, there are a few more steps you might consider to fully implement the system:

Define the relationships between taxonomies and other objects: In order to use taxonomies to categorize other objects in your system (such as posts or products), you will need to define the relationships between the taxonomies and those objects. For example, in WordPress, categories and tags are used to categorize posts, and there is a separate table called "term_relationships" that defines the relationship between posts and their assigned categories and tags.

Add additional fields to the "textonomies" table: Depending on the needs of your application, you may want to add additional fields to the "textonomies" table to provide more context or metadata about each taxonomy. For example, in WordPress, the "wp_terms" table (which is analogous to your "textonomies" table) also includes fields for "slug" (a unique identifier for the term), "description" (a brief description of the term), and "parent" (if the term is a child of another term).

Create user interfaces for managing taxonomies and taxonomy terms: In order to make it easy for users to manage your taxonomies and assign them to other objects, you may need to create user interfaces within your application. For example, in WordPress, there are admin screens for managing categories and tags, and for assigning those terms to individual posts.

Define how to handle orphaned terms: If you allow users to delete taxonomies or taxonomy terms, you may need to define how your system will handle orphaned terms (i.e. terms that were previously assigned to objects but are no longer associated with a taxonomy). In some cases, it may make sense to automatically delete orphaned terms, while in other cases you may want to retain them for historical or audit purposes.

Overall, creating a taxonomy system can be a powerful tool for organizing and categorizing data in your application. By carefully designing your taxonomy structure and providing user-friendly interfaces for managing it, you can make it easy for users to find and work with the data they need.

===
This seems difficult  ==>when a user assigns a new category or tag to a post, WordPress creates a new row in the "term_relationships" table to record that relationship. And if a user removes a category or tag from a post, WordPress simply deletes the corresponding row from the "term_relationships" table.
Isnt the following solution Easy?

==> suppose we have a textonomy in "textonomies table" (id=1 name="tag"). in "textonomyEntry" table we have tags like "texttile", id=1 , "fashion",id=2 . Now we add both the tags ("texttile" and "fashion")   to an article in "articles table". WE can have a field  called "tags" in article table where we insert id 1 and 2 in array/json format.we can later get "tags" vaule and then get the tags from "textonomEntry" table based on tags.  This will save us from creating a third table
how you compare both these these techniques?

