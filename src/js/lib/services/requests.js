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

$.prototype.get = async function(url, dataTypeAnswer = 'json', headers = {}) {
    try {
        let res = await fetch(url, { headers });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await handleResponse(res, dataTypeAnswer);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

$.prototype.post = async function(url, data, dataTypeAnswer = 'text', headers = {}) {
    try {
        let res = await fetch(url, {
            method: 'POST',
            body: data,
            headers
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await handleResponse(res, dataTypeAnswer);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

$.prototype.put = async function(url, data, dataTypeAnswer = 'text', headers = {}) {
    try {
        let res = await fetch(url, {
            method: 'PUT',
            body: data,
            headers
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await handleResponse(res, dataTypeAnswer);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

$.prototype.delete = async function(url, dataTypeAnswer = 'text', headers = {}) {
    try {
        let res = await fetch(url, {
            method: 'DELETE',
            headers
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await handleResponse(res, dataTypeAnswer);
    } catch (error) {
        console.error(error);
        throw error;
    }
};