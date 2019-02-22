import { publisherType } from "../type/PublisherType";

        export function getAllPublishers(data) {
    return {
        type: publisherType.GET_ALL_PUBLISHERS,
        publisher: data
    };
}