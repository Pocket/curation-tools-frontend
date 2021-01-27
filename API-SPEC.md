# API SPEC (WIP)

## Questions

- When clicking 'Remove', what should happen? Should the prospect be deleted from the database? Returned to the queue? Kept in the database for historical purposes but hidden from all other views?
- What defines an 'Approved' prospect?
- What happens when a prospect in the queue is 'Snoozed'?
- What happens when an 'Approved' prospect is 'Snoozed'?
- What does 'Reject' do? Why is there a 'Snooze' button on the 'Rejected' view?
- Can you re-prioritize a story after it's already live/scheduled?
- How should we sort prospects in regards to snoozed?
  - Example: a story is snoozed for two weeks. After two weeks, in what order should this story appear?
  - Related question: we are assuming we'll sort stories by `updatedAt` - is this correct?
- When clicking any button (Snooze/Reject/Approve) on the Edit & Approve screen, where is the user redirected to?

## Propsects

### Queue | Approved | Snoozed | Rejected | Live | Scheduled

HTTP Method: `GET`

_Request_

The following URLs will all return the same data structure:

- Queue: `/prospects/{feedId}`
- Approved: `/prospects/{feedId}/approved`
- Snoozed: `/prospects/{feedId}/snoozed`
- Rejected: `/prospects/{feedId}/rejected`
- Live: `/prospects/{feedId}/live`
- Scheduled: `/prospects/{feedId}/scheduled`

Request query parameters (applicable to all URLs above):

`?page={int}&perPage={int}`

_Response_

```
{
    data: [{
        id: string
        feedId: string
        state: PENDING|REJECTED|APPROVED
        snoozedUntil: DateTime
        url: string
        publisher: string
        author: string
        title: string
        excerpt: string
        imageUrl: string
        altText: string
        itemId: string
        topic: string
        sourceName: string
        sourceScore: Float
        syndicationArticleId: string
        prioritized: boolean
        removed: boolean
        createdAt: DateTime
        updatedAt: DateTime
    }]
    meta: {
        totalResults: int
        currentPage: int
        perPage: int
        nextPageUrl: string
        prevPageUrl: string
    }
    success: boolean
    message: string
    error: [{
        message: string
        code: int
    }]
}
```

### Get

HTTP Method: `GET`

_Request_

`/prospects/{feedId}/{prospectId}`

_Response_

```
{
    data: {
        id: string
        feedId: string
        state: PENDING|REJECTED|APPROVED
        snoozedUntil: DateTime
        url: string
        publisher: string
        author: string
        title: string
        excerpt: string
        imageUrl: string
        altText: string
        itemId: string
        topic: string
        sourceName: string
        sourceScore: Float
        syndicationArticleId: string
        prioritized: boolean
        removed: boolean
        createdAt: DateTime
        updatedAt: DateTime
    }
    meta: {}
    success: boolean
    message: string
    error: [{
        message: string
        code: int
    }]
}
```

### Create

HTTP Method: `POST`

Questions:

- Do we need a `sourceName` in the POST data?

_Request_

`/prospects/{feedId}`

Request JSON

```
{
    url: string
}
```

_Response_

```
{
    data: {
        id: string
        feedId: string
        state: PENDING|REJECTED|APPROVED
        snoozedUntil: DateTime
        url: string
        publisher: string
        author: string
        title: string
        excerpt: string
        imageUrl: string
        altText: string
        itemId: string
        topic: string
        sourceName: string
        sourceScore: Float
        syndicationArticleId: string
        prioritized: boolean
        removed: boolean
        createdAt: DateTime
        updatedAt: DateTime
    }
    meta: {}
    success: boolean
    message: string
    error: [{
        message: string
        code: int
    }]
}
```

### Update

HTTP Method: `PUT`

_Request_

`/prospects/{feedId}/{prospectId}`

Request JSON

```
{
    url: string
    publisher: string
    author: string
    title: string
    excerpt: string
    altText: string
    thumbnailUrl: string
    sourceName: string
    topic: string
    prioritized: boolean
    status: APPROVE|REJECT|SNOOZE
}
```

_Response_

```
{
    data: {
        id: string
        feedId: string
        state: PENDING|REJECTED|APPROVED
        snoozedUntil: DateTime
        url: string
        publisher: string
        author: string
        title: string
        excerpt: string
        imageUrl: string
        altText: string
        itemId: string
        topic: string
        sourceName: string
        sourceScore: Float
        syndicationArticleId: string
        prioritized: boolean
        removed: boolean
        createdAt: DateTime
        updatedAt: DateTime
    }
    meta: {}
    success: boolean
    message: string
    error: [{
        message: string
        code: int
    }]
}
```

### Remove

HTTP METHOD: `PUT`?

_Request_

- `/prospects/{feedId}/{prospectId}/remove`

_Response_

```
{
    data: {
        id: string
        feedId: string
        state: PENDING|REJECTED|APPROVED
        snoozedUntil: DateTime
        url: string
        publisher: string
        author: string
        title: string
        excerpt: string
        imageUrl: string
        altText: string
        itemId: string
        topic: string
        sourceName: string
        sourceScore: Float
        syndicationArticleId: string
        prioritized: boolean
        removed: boolean
        createdAt: DateTime
        updatedAt: DateTime
    }
    meta: {}
    success: boolean
    message: string
    error: [{
        message: string
        code: int
    }]
}
```
