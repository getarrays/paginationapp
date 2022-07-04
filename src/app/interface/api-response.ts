export interface ApiResponse<T> {
    timeStamp: string;
    statusCode: number;
    status: string;
    message: string;
    data: { page: T };
}