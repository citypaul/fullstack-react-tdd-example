# Feature requirements

We have been asked to implement a product search feature.

The feature should allow users to search for products by name.

Products will be displayed in a list. Each product will have a name, an image, a price, and a description.

The product data will be provided by a Product REST API that we will consume in our BFF service. This product API represents a domain level service that is responsible for fetching product data from a database.

In reality, multiple front ends for different applications could be consuming this product API. For example, a mobile app, a web app, and a desktop app.

The BFF service will be responsible for fetching the product data from the Product REST API and returning it to the client in a format that is ready to be consumed by the UI. This BFF will be specific to the web app.
