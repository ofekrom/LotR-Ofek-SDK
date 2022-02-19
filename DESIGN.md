## Design

This repository is an SDK to easily access the-one-api. The API is exposed via the LOTRClient class, intended to be used
as a singleton.

The LOTRClient needs to be initiated once with the bearer token received offline when signing up before using it.

At the moment, LOTRClient 100% mirrors the backend API.

The LOTRClient uses the APIHandler to make the various requests.

The APIHandler first resolves the user parameters to an HTTP query param using params-resolver.

The query param is essentially a MongoDB query that will be executed by the backend.

The request is executed with Axios, and the response is returned to the client.
