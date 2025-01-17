'use strict';

import $ from '../core';

async function handleResponse(res, dataTypeAnswer) {
    switch (dataTypeAnswer) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
        case 'arrayBuffer':
            return await res.arrayBuffer();
        case 'formData':
            return await res.formData();
        default:
            throw new Error(`Unsupported data type: ${dataTypeAnswer}`);
    }
}

$.prototype.request = async function(method, url, data = null, dataTypeAnswer = 'json') {
    try {
        const options = {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: data ? JSON.stringify(data) : null
        };

        const res = await fetch(url, options);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await handleResponse(res, dataTypeAnswer);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

$.prototype.get = function(url, dataTypeAnswer = 'json') {
    return this.request('GET', url, null, dataTypeAnswer);
};

$.prototype.post = function(url, data, dataTypeAnswer = 'json') {
    return this.request('POST', url, data, dataTypeAnswer);
};

$.prototype.put = function(url, data, dataTypeAnswer = 'json') {
    return this.request('PUT', url, data, dataTypeAnswer);
};

$.prototype.patch = function(url, data, dataTypeAnswer = 'json') {
    return this.request('PATCH', url, data, dataTypeAnswer);
};

$.prototype.delete = function(url, dataTypeAnswer = 'json') {
    return this.request('DELETE', url, null, dataTypeAnswer);
};