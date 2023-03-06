module.exports = {
    routes: [
        {  // Path defined
            method: 'GET',
            path: "/custom",
            handler: 'restaurant.exampleAction',
            config: {
                auth: false,
                policies: ['global::is-authenticated']
            }

        }
    ]
}