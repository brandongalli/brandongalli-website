
const resp = await fetch(
    "https://us-central1-personal-web-site-415416.cloudfunctions.net/get_data_from_bucket?fileName=countries.json",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1YzE4OGE4MzU0NmZjMTg4ZTUxNTc2YmE3MjgzNmUwNjAwZThiNzMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAzNTI0MzM3NDc0NzQxMDMwNjkyIiwiZW1haWwiOiJicmFuZG9uZ2FsbGkzMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImF0ZndCNGFBa3l3RkVPSXo0ZHJnSHciLCJpYXQiOjE3MDg5NDE4OTEsImV4cCI6MTcwODk0NTQ5MX0.X2fyphXOvye5lppUEopWZxCZV3oRSxOdWR7vZBUSa2L4QPeB9fxol9Q0_mjiekvbaeP5uF3Zg5ErSSjV7OU996s8lFtk5RAefA7cDcls3FiBcw7dyeKSVFnLcTMnuRD__cy6XRZM1eAyBWABJRvfh0Iex9mzs1PMEm4J5HJ5xCmGE4jfLJrA03ph1KpFGfeUd1PGvV60KLMksqZR22XqyCkffd6bBEUiJ0cfATewYLj0IdG4rfTjrw32xOvCLg1lwCBqINBtrXXUHwzkdDU8_EMUbgIJ0B2w3TwRb3xJydAtibkJRKtLP65XoDIfqybFIfO-bXvXVSZ_faXj9LLNnw"
        },
    });
const result = await resp.json()