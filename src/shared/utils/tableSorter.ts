import moment from "moment";

type SORT = "alphabetical" | "number" | "chronological"
export const tableSorter = (sort: SORT, a: any, b: any) => {
    switch(sort) {
        case "alphabetical" : {
            return a?.localeCompare(b);
        }
        case "number" : {
            return a - b
        }
        case "chronological" : {
            return moment(a).diff(moment(b))
        }
    }
}   