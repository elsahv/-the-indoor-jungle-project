// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import blockContent from "./blockContent";
import posts from "./posts";
import category from "./category";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by an+y plugins that are installed
  types: schemaTypes.concat([
    blockContent,
    posts,
    category,

    /* Your types here! */
  ]),
});
