(window.webpackJsonp = window.webpackJsonp || []).push([ [ 0 ], {
    "./node_modules/_anujs@1.4.8@anujs/dist/Rematch.js": function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("dll-reference _React_DLL_base")("./node_modules/_anujs@1.4.8@anujs/dist/Rematch.js");
    },
    "./node_modules/_react-redux@5.0.7@react-redux/es/index.js": function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("dll-reference _React_DLL_base")("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
    },
    "./src/components/Add.jsx": function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = !0, exports["default"] = void 0;
        var _react = _interopRequireDefault(__webpack_require__("./node_modules/_anujs@1.4.8@anujs/dist/ReactIE.js")), _app = _interopRequireDefault(__webpack_require__("./src/stores/app.js")), _Conf = _interopRequireDefault(__webpack_require__("./src/components/Conf.jsx")), _antd = __webpack_require__("./node_modules/_antd@1.11.6@antd/dist/antd.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        var Add = function(_React$PureComponent) {
            function Add() {
                for (var _this, _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                return (_this = _React$PureComponent.call.apply(_React$PureComponent, [ this ].concat(args)) || this).state = {
                    visible: !1
                }, _this.data = {}, _this;
            }
            !function _inheritsLoose(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype), (subClass.prototype.constructor = subClass).__proto__ = superClass;
            }(Add, _React$PureComponent);
            var _proto = Add.prototype;
            return _proto.render = function() {
                return _react["default"].createElement(_antd.Modal, {
                    title: "Add",
                    width: "350px",
                    maskClosable: !1,
                    visible: this.state.visible,
                    okText: "Save",
                    onOk: this.save.bind(this),
                    cancelText: "Cancel",
                    onCancel: this.close.bind(this)
                }, _react["default"].createElement(_Conf["default"], {
                    onChange: this.onChange.bind(this)
                }));
            }, _proto.open = function() {
                this.setState({
                    visible: !0
                });
            }, _proto.close = function() {
                this.setState({
                    visible: !1
                });
            }, _proto.onChange = function(data) {
                this.data = data;
            }, _proto.save = function() {
                _app["default"].dispatch.todoModel.add(this.data), _antd.message.success("The record is added successfully");
            }, Add;
        }(_react["default"].PureComponent);
        exports["default"] = Add;
    },
    "./src/components/Conf.jsx": function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = !0, exports["default"] = void 0;
        var _react = _interopRequireDefault(__webpack_require__("./node_modules/_anujs@1.4.8@anujs/dist/ReactIE.js")), _app = _interopRequireDefault(__webpack_require__("./src/styles/app.css")), _antd = __webpack_require__("./node_modules/_antd@1.11.6@antd/dist/antd.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _extends() {
            return (_extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        var Conf = function(_React$PureComponent) {
            function Conf(props) {
                var _this;
                return (_this = _React$PureComponent.call(this, props) || this).state = {
                    startTime: props.startTime,
                    endTime: props.endTime,
                    content: props.content
                }, _this;
            }
            !function _inheritsLoose(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype), (subClass.prototype.constructor = subClass).__proto__ = superClass;
            }(Conf, _React$PureComponent);
            var _proto = Conf.prototype;
            return _proto.render = function() {
                return _react["default"].createElement("table", {
                    className: _app["default"].Conf__table
                }, _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "Start Time:"), _react["default"].createElement("td", null, _react["default"].createElement(_antd.DatePicker, {
                    value: this.state.startTime,
                    onChange: this.onChangeStartTime.bind(this)
                }))), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "End Time:"), _react["default"].createElement("td", null, _react["default"].createElement(_antd.DatePicker, {
                    value: this.state.endTime,
                    onChange: this.onChangeEndTime.bind(this)
                }))), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "Content:"), _react["default"].createElement("td", null, _react["default"].createElement(_antd.Input, {
                    type: "textarea",
                    rows: 4,
                    defaultValue: this.state.content,
                    onChange: this.onChangeContent.bind(this)
                }))));
            }, _proto.onChange = function() {
                this.props.onChange(_extends({}, this.state));
            }, _proto.onChangeStartTime = function(date, dateStr) {
                var _this2 = this, startTime = Date.parse(dateStr) || 0, endTime = Date.parse(this.state.endTime) || 0;
                startTime && endTime && endTime < startTime && _antd.message.warning("The start time must be less than or equal to the end time"), 
                this.setState({
                    startTime: dateStr
                }, function() {
                    return _this2.onChange();
                });
            }, _proto.onChangeEndTime = function(date, dateStr) {
                var _this3 = this, startTime = Date.parse(this.state.startTime) || 0, endTime = Date.parse(dateStr) || 0;
                startTime && endTime && endTime < startTime && _antd.message.warning("The end time must be greater than or equal to the start time"), 
                this.setState({
                    endTime: dateStr
                }, function() {
                    return _this3.onChange();
                });
            }, _proto.onChangeContent = function(event) {
                var _this4 = this, content = event.target.value.trim();
                content || _antd.message.warning("The content should not be empty"), this.setState({
                    content: content
                }, function() {
                    return _this4.onChange();
                });
            }, Conf;
        }(_react["default"].PureComponent);
        exports["default"] = Conf;
    },
    "./src/components/Modify.jsx": function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = !0, exports["default"] = void 0;
        var _react = _interopRequireDefault(__webpack_require__("./node_modules/_anujs@1.4.8@anujs/dist/ReactIE.js")), _app = _interopRequireDefault(__webpack_require__("./src/stores/app.js")), _Conf = _interopRequireDefault(__webpack_require__("./src/components/Conf.jsx")), _antd = __webpack_require__("./node_modules/_antd@1.11.6@antd/dist/antd.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        var Modify = function(_React$PureComponent) {
            function Modify() {
                for (var _this, _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                return (_this = _React$PureComponent.call.apply(_React$PureComponent, [ this ].concat(args)) || this).state = {
                    visible: !1
                }, _this.data = {}, _this;
            }
            !function _inheritsLoose(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype), (subClass.prototype.constructor = subClass).__proto__ = superClass;
            }(Modify, _React$PureComponent);
            var _proto = Modify.prototype;
            return _proto.render = function() {
                return this.state.visible ? _react["default"].createElement(_antd.Modal, {
                    title: "Modify",
                    width: "350px",
                    maskClosable: !1,
                    visible: !0,
                    okText: "Save",
                    onOk: this.save.bind(this),
                    cancelText: "Cancel",
                    onCancel: this.close.bind(this)
                }, _react["default"].createElement(_Conf["default"], {
                    startTime: this.props.data.startTime,
                    endTime: this.props.data.endTime,
                    content: this.props.data.content,
                    onChange: this.onChange.bind(this)
                })) : null;
            }, _proto.open = function() {
                this.setState({
                    visible: !0
                });
            }, _proto.close = function() {
                this.setState({
                    visible: !1
                });
            }, _proto.onChange = function(data) {
                this.data = data;
            }, _proto.save = function() {
                this.data.uid = this.props.data.uid, _app["default"].dispatch.todoModel.modify(this.data), 
                _antd.message.success("The record is modified successfully");
            }, Modify;
        }(_react["default"].PureComponent);
        exports["default"] = Modify;
    },
    "./src/components/Todo.jsx": function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = !0, exports["default"] = void 0;
        var _react = _interopRequireDefault(__webpack_require__("./node_modules/_anujs@1.4.8@anujs/dist/ReactIE.js")), _reactRedux = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js"), _app = _interopRequireDefault(__webpack_require__("./src/stores/app.js")), _app2 = _interopRequireDefault(__webpack_require__("./src/styles/app.css")), _Add = _interopRequireDefault(__webpack_require__("./src/components/Add.jsx")), _Modify = _interopRequireDefault(__webpack_require__("./src/components/Modify.jsx")), _antd = __webpack_require__("./node_modules/_antd@1.11.6@antd/dist/antd.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        var Todo = function(_React$Component) {
            function Todo() {
                for (var _this, _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                return (_this = _React$Component.call.apply(_React$Component, [ this ].concat(args)) || this).state = {
                    selectedRows: [],
                    selectedRowKeys: []
                }, _this.columns = [ {
                    title: "Start Time",
                    key: "startTime",
                    dataIndex: "startTime",
                    width: 85
                }, {
                    title: "End Time",
                    key: "endTime",
                    dataIndex: "endTime",
                    width: 85
                }, {
                    title: "Content",
                    key: "content",
                    dataIndex: "content"
                } ], _this.addRef = _react["default"].createRef(), _this.modifyRef = _react["default"].createRef(), 
                _this;
            }
            !function _inheritsLoose(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype), (subClass.prototype.constructor = subClass).__proto__ = superClass;
            }(Todo, _React$Component);
            var _proto = Todo.prototype;
            return _proto.render = function() {
                var _this2 = this;
                return _react["default"].createElement("div", {
                    className: _app2["default"].Todo
                }, _react["default"].createElement(_antd.Table, {
                    rowKey: "uid",
                    columns: this.columns,
                    dataSource: this.props.todoState,
                    rowSelection: this.getRowSelection(),
                    locale: {
                        emptyText: "No Data"
                    }
                }), _react["default"].createElement("div", {
                    className: _app2["default"]["Todo__btn-group"]
                }, _react["default"].createElement(_antd.Button, {
                    onClick: function() {
                        return _this2.addRef.current.open();
                    }
                }, "Add"), _react["default"].createElement(_antd.Button, {
                    onClick: this.onClickDoneButton.bind(this),
                    disabled: !this.state.selectedRows.length
                }, "Done"), _react["default"].createElement(_antd.Button, {
                    onClick: this.onClickDeleteButton.bind(this),
                    disabled: !this.state.selectedRows.length
                }, "Delete"), _react["default"].createElement(_antd.Button, {
                    onClick: function() {
                        return _this2.modifyRef.current.open();
                    },
                    disabled: 1 !== this.state.selectedRows.length
                }, "Modify")), _react["default"].createElement(_Add["default"], {
                    ref: this.addRef
                }), _react["default"].createElement(_Modify["default"], {
                    ref: this.modifyRef,
                    data: this.state.selectedRows[0]
                }));
            }, _proto.getRowSelection = function() {
                var component = this;
                return {
                    selectedRowKeys: this.state.selectedRowKeys,
                    onChange: function(selectedRowKeys, selectedRows) {
                        component.setState({
                            selectedRows: selectedRows,
                            selectedRowKeys: selectedRowKeys
                        });
                    }
                };
            }, _proto.deleteSelectedRows = function() {
                this.props.todoDispatch["delete"](this.state.selectedRowKeys), this.setState({
                    selectedRows: [],
                    selectedRowKeys: []
                });
            }, _proto.onClickDoneButton = function() {
                this.props.doneDispatch.add(this.state.selectedRows), this.deleteSelectedRows(), 
                _antd.message.success("The records have turned into the done state");
            }, _proto.onClickDeleteButton = function() {
                this.deleteSelectedRows(), _antd.message.success("The records have been deleted successfully");
            }, Todo;
        }(_react["default"].Component), mapStateToProps = function mapStateToProps(state, ownProps) {
            return {
                todoState: state.todoModel
            };
        }, mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
            return {
                todoDispatch: dispatch.todoModel,
                doneDispatch: dispatch.doneModel
            };
        }, ConnectedComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Todo), _default = function _default() {
            return _react["default"].createElement(_reactRedux.Provider, {
                store: _app["default"]
            }, _react["default"].createElement(ConnectedComponent, null));
        };
        exports["default"] = _default;
    },
    "./src/stores/app.js": function(module, exports, __webpack_require__) {
        "use strict";
        function _extends() {
            return (_extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        exports.__esModule = !0, exports["default"] = void 0;
        var todoModel = {
            state: [],
            reducers: {
                add: function(state, record) {
                    return state.concat(_extends({}, record, {
                        uid: setTimeout(";")
                    }));
                },
                "delete": function(state, uidSet) {
                    return state.filter(function(record) {
                        return -1 === uidSet.findIndex(function(uid) {
                            return uid === record.uid;
                        });
                    });
                },
                modify: function(state, record) {
                    return state.map(function(item) {
                        return item.uid === record.uid ? record : item;
                    });
                }
            }
        }, _default = (0, __webpack_require__("./node_modules/_anujs@1.4.8@anujs/dist/Rematch.js").init)({
            models: {
                todoModel: todoModel,
                doneModel: {
                    state: [],
                    reducers: {
                        add: function(state, records) {
                            return state.concat(records);
                        }
                    }
                }
            }
        });
        exports["default"] = _default;
    }
} ]);