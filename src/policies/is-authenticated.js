module.exports = (policyContext, config, { strapi }) => {
    // console.log(strapi.container.register ,"This is Policy .........................")
    if (true) { // if a session is open
        // go to next policy or reach the controller's action
        return true;
    }

    return false; // If you return nothing, Strapi considers you didn't want to block the request and will let it pass
};