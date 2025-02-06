'use strict';

import $ from '../core';

/**
 * @file Предоставляет методы анимации для элементов DOM.
 */


/**
 * Обрабатывает ответ сервера в указанном формате.
 * @function handleResponse
 * @param {Response} res Ответ от fetch-запроса.
 * @param {string} dataTypeAnswer Тип данных ответа ('json', 'text', 'blob', 'arrayBuffer', 'formData').
 * @returns {Promise<any>} Промис с данными в указанном формате.
 * @throws {Error} Если передан неподдерживаемый тип данных.
 */
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

/**
 * Выполняет HTTP-запрос с указанными параметрами.
 * @method request
 * @memberof $
 * @param {string} method HTTP-метод запроса ('GET', 'POST', 'PUT', 'PATCH', 'DELETE').
 * @param {string} url URL-адрес запроса.
 * @param {Object|null} [data=null] Данные запроса (для методов, поддерживающих тело запроса).
 * @param {string} [dataTypeAnswer='json'] Ожидаемый тип данных ответа.
 * @returns {Promise<any>} Промис с данными ответа.
 * @throws {Error} Если запрос завершился с ошибкой.
 */
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

/**
 * Выполняет GET-запрос.
 * @method get
 * @memberof $
 * @param {string} url URL-адрес запроса.
 * @param {string} [dataTypeAnswer='json'] Ожидаемый тип данных ответа.
 * @returns {Promise<any>} Промис с данными ответа.
 */
$.prototype.get = function(url, dataTypeAnswer = 'json') {
    return this.request('GET', url, null, dataTypeAnswer);
};

/**
 * Выполняет POST-запрос.
 * @method post
 * @memberof $
 * @param {string} url URL-адрес запроса.
 * @param {Object} data Данные, отправляемые в теле запроса.
 * @param {string} [dataTypeAnswer='json'] Ожидаемый тип данных ответа.
 * @returns {Promise<any>} Промис с данными ответа.
 */
$.prototype.post = function(url, data, dataTypeAnswer = 'json') {
    return this.request('POST', url, data, dataTypeAnswer);
};

/**
 * Выполняет PUT-запрос.
 * @method put
 * @memberof $
 * @param {string} url URL-адрес запроса.
 * @param {Object} data Данные, отправляемые в теле запроса.
 * @param {string} [dataTypeAnswer='json'] Ожидаемый тип данных ответа.
 * @returns {Promise<any>} Промис с данными ответа.
 */
$.prototype.put = function(url, data, dataTypeAnswer = 'json') {
    return this.request('PUT', url, data, dataTypeAnswer);
};

/**
 * Выполняет PATCH-запрос.
 * @method patch
 * @memberof $
 * @param {string} url URL-адрес запроса.
 * @param {Object} data Данные, отправляемые в теле запроса.
 * @param {string} [dataTypeAnswer='json'] Ожидаемый тип данных ответа.
 * @returns {Promise<any>} Промис с данными ответа.
 */
$.prototype.patch = function(url, data, dataTypeAnswer = 'json') {
    return this.request('PATCH', url, data, dataTypeAnswer);
};

/**
 * Выполняет DELETE-запрос.
 * @method delete
 * @memberof $
 * @param {string} url URL-адрес запроса.
 * @param {string} [dataTypeAnswer='json'] Ожидаемый тип данных ответа.
 * @returns {Promise<any>} Промис с данными ответа.
 */
$.prototype.delete = function(url, dataTypeAnswer = 'json') {
    return this.request('DELETE', url, null, dataTypeAnswer);
};