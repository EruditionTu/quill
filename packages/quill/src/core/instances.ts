/**
 * 节点对应Quill实例的映射表
 * 用于存储每个节点对应的Quill实例，以便在需要时快速获取实例。
 * @type {WeakMap<Node, Quill>}
 */
import type Quill from '../core.js';

export default new WeakMap<Node, Quill>();
