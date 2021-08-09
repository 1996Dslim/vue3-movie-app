exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'Dslim',
            age: 85,
            email: 'ging35@naver.com'
        })
    }
}