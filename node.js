var require = function (moduleName) {
    return require.node[moduleName];
};

var global ={};

var process = {
	/// <field type='String'>a String identifying the processor architecture that the Node.js process is currently running on. For instance 'arm', 'ia32', or 'x64'.</field>
	arch:{},
	/// <field type='Array'>The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched. The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command line arguments.</field>
	argv:{},
	/// <field type='String'>The process.argv0 property stores a read-only copy of the original value of argv[0] passed when Node.js starts.</field>
	argv0:{},
	/// <field type='Object'>The process.config property returns an Object containing the JavaScript representation of the configure options used to compile the current Node.js executable. This is the same as the config.gypi file that was produced when running the ./configure script.</field>
	config:{},
	/// <field type='Booln'>If the Node.js process is spawned with an IPC channel (see the Child Process and Cluster documentation), the process.connected property will return true so long as the IPC channel is connected and will return false after process.disconnect() is called.</field>
	connected:{},
	/// <field type='Object'>The process.env property returns an object containing the user environment. </field>
	env:{},
	/// <field type='Array'>$ node --harmony script.js --version   =>  ['--harmony']</field>
	execArgv:{},
	/// <field type='String'>The process.execPath property returns the absolute pathname of the executable that started the Node.js process.</field>
	execPath:{},
	/// <field type='Number'>A number which will be the process exit code, when the process either exits gracefully, or is exited via process.exit() without specifying a code.</field>
	exitCode:{},
	/// <field type='Object'>The process.mainModule property provides an alternative way of retrieving require.main. The difference is that if the main module changes at runtime, require.main may still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.</field>
	mainModule:{},
	/// <field type='Number'>The process.pid property returns the PID of the process.</field>
	pid:{},
	/// <field type='String'>The process.platform property returns a string identifying the operating system platform on which the Node.js process is running. For instance 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'</field>
	platform:{},
	/// <field type='Object'>The process.release property returns an Object containing metadata related to the current release, including URLs for the source tarball and headers-only tarball.</field>
	release:{},
	/// <field type='Object'>The process.stderr property returns a Writable stream equivalent to or associated with stderr</field>
	stderr:{},
	/// <field type='Object'>The process.stdin property returns a Readable stream equivalent to or associated with stdin</field>
	stdin:{},
	/// <field type='Object'>The process.stdout propety returns a Writable stream equivalent to or associated with stdout</field>
	stdout:{},
	/// <field type='String'>The process.title property returns the current process title (i.e. returns the current value of ps). Assigning a new value to process.title modifies the current value of ps.</field>
	title:{},
	/// <field type='String'>The process.version property returns the Node.js version string.</field>
	version:{},
	/// <field type='Object'>The process.versions property returns an object listing the version strings of Node.js and its dependencies.</field>
	versions:{}

};


/** @description causes the Node.js process to exit immediately and generate a core file.
*/ 
process.abort = function(){};

/** @description The process.chdir() method changes the current working directory of the Node.js process or throws an exception if doing so fails (for instance, if the specified directory does not exist).
*/ 
process.chdir = function(directory){};


/** @description The process.cpuUsage() method returns the user and system CPU time usage of the current process, in an object with properties user and system, whose values are microsecond values (millionth of a second). These values measure time spent in user and system code respectively, and may end up being greater than actual elapsed time if multiple CPU cores are performing work for this process.
*/ 
process.cpuUsage = function(previousValue){};


/** @description The process.cwd() method returns the current working directory of the Node.js process.
*/ 
process.cwd = function(){};


/** @description If the Node.js process is spawned with an IPC channel (see the Child Process and Cluster documentation), the process.disconnect() method will close the IPC channel to the parent process, allowing the child process to exit gracefully once there are no other connections keeping it alive.
*/ 
process.disconnect = function(){};


/** @description The process.emitWarning() method can be used to emit custom or application specific process warnings. These can be listened for by adding a handler to the process.on('warning') event.
*/ 
process.emitWarning = function(warning, name, ctor){};


/** @description The process.exit() method instructs Node.js to terminate the process as quickly as possible with the specified exit code. If the code is omitted, exit uses either the 'success' code 0 or the value of process.exitCode if specified.
*/ 
process.exit = function(code){};


/** @description The process.getegid() method returns the numerical effective group identity of the Node.js process. 
*/ 
process.getegid = function(){};


/** @description The process.geteuid() method returns the numerical effective user identity of the process.
*/ 
process.geteuid = function(){};

/** @description The process.getgid() method returns the numerical group identity of the process. 
*/ 
process.getgid = function(){};

/** @description The process.getgroups() method returns an array with the supplementary group IDs. POSIX leaves it unspecified if the effective group ID is included but Node.js ensures it always is.
*/ 
process.getgroups = function(){};

/** @description The process.getuid() method returns the numeric user identity of the process.
*/ 
process.getuid = function(){};

/** @description he process.hrtime() method returns the current high-resolution real time in a [seconds, nanoseconds] tuple Array. time is an optional parameter that must be the result of a previous process.hrtime() call (and therefore, a real time in a [seconds, nanoseconds] tuple Array containing a previous time) to diff with the current time. These times are relative to an arbitrary time in the past, and not related to the time of day and therefore not subject to clock drift. The primary use is for measuring performance between intervals.
*/ 
process.hrtime = function(time){};

/** @description The process.initgroups() method reads the /etc/group file and initializes the group access list, using all groups of which the user is a member. This is a privileged operation that requires that the Node.js process either have root access or the CAP_SETGID capability.
*/ 
process.initgroups = function(user, extra_group){};

/** @description The process.kill() method sends the signal to the process identified by pid.
*/ 
process.kill = function(pid, signal){};

/** @description  The process.memoryUsage() method returns an object describing the memory usage of the Node.js process measured in bytes.
*/ 
process.memoryUsage = function(){};

/** @description  The process.nextTick() method adds the callback to the "next tick queue". Once the current turn of the event loop turn runs to completion, all callbacks currently in the next tick queue will be called. This is not a simple alias to setTimeout(fn, 0), it's much more efficient. It runs before any additional I/O events (including timers) fire in subsequent ticks of the event loop.
*/ 
process.nextTick = function(callbackarg){};

/** @description  If Node.js is spawned with an IPC channel, the process.send() method can be used to send messages to the parent process. Messages will be received as a 'message' event on the parent's ChildProcess object.
*/ 
process.send = function(message,sendHandle, options, callback){};

/** @description  The process.setegid() method sets the effective group identity of the process. (See setegid(2).) The id can be passed as either a numeric ID or a group name string. If a group name is specified, this method blocks while resolving the associated a numeric ID.
*/ 
process.setegid = function(id){};

/** @description  The process.seteuid() method sets the effective user identity of the process. (See seteuid(2).) The id can be passed as either a numeric ID or a username string. If a username is specified, the method blocks while resolving the associated numeric ID.
*/ 
process.seteuid = function(id){};

/** @description  The process.setgid() method sets the group identity of the process. (See setgid(2).) The id can be passed as either a numeric ID or a group name string. If a group name is specified, this method blocks while resolving the associated numeric ID.
*/ 
process.setgid = function(id){};

/** @description  The process.setgroups() method sets the supplementary group IDs for the Node.js proess. This is a privileged operation that requires the Node.js process to have root or the CAP_SETGID capability. The groups array can contain numeric group IDs, group names or both. Note: This function is only available on POSIX platforms (i.e. not Windows or Android)
*/ 
process.setgroups = function(groups){};

/** @description  The process.setuid(id) method sets the user identity of the process. (See setuid(2).) Theid` can be passed as either a numeric ID or a username string. If a username is specified, the method blocks while resolving the associated numeric ID.
*/ 
process.setuid = function(id){};

/** @description  The process.umask() method sets or returns the Node.js process's file mode creation mask. Child processes inherit the mask from the parent process. The old mask is return if the mask argument is given, otherwise returns the current mask.
*/ 
process.umask = function(mask){};

/** @description  The process.uptime() method returns the number of seconds the current Node.js process has been running.
*/ 
process.uptime = function(){};


(function(){
var node = require.node ={};
/** @description assert(value[, message])
* @param {any} value 
* @param {any} message 
*/ 
node.assert = function (value,message) { } 

/** @description assert.deepEqual(actual, expected[, message])
* @param {any} actual 
* @param {any} expected 
* @param {any} message 
*/ 
node.assert.deepEqual = function (actual,expected,message) { } 

/** @description assert.deepStrictEqual(actual, expected[, message])
* @param {any} actual 
* @param {any} expected 
* @param {any} message 
*/ 
node.assert.deepStrictEqual = function (actual,expected,message) { } 

/** @description assert.doesNotThrow(block[, error][, message])
* @param {any} block 
* @param {any} error 
* @param {any} message 
*/ 
node.assert.doesNotThrow = function (block,error,message) { } 

/** @description assert.equal(actual, expected[, message])
* @param {any} actual 
* @param {any} expected 
* @param {any} message 
*/ 
node.assert.equal = function (actual,expected,message) { } 

/** @description assert.fail(actual, expected, message, operator)
* @param {any} actual 
* @param {any} expected 
* @param {any} message 
* @param {any} operator 
*/ 
node.assert.fail = function (actual,expected,message,operator) { } 

/** @description assert.ifError(value)
* @param {any} value 
*/ 
node.assert.ifError = function (value) { } 

/** @description assert.notDeepEqual(actual, expected[, message])
* @param {any} actual 
* @param {any} expected 
* @param {any} message 
*/ 
node.assert.notDeepEqual = function (actual,expected,message) { } 

/** @description assert.notDeepStrictEqual(actual, expected[, message])
* @param {any} actual 
* @param {any} expected 
* @param {any} message 
*/ 
node.assert.notDeepStrictEqual = function (actual,expected,message) { } 

/** @description assert.notEqual(actual, expected[, message])
* @param {any} actual 
* @param {any} expected 
* @param {any} message 
*/ 
node.assert.notEqual = function (actual,expected,message) { } 

/** @description assert.notStrictEqual(actual, expected[, message])
* @param {any} actual 
* @param {any} expected 
* @param {any} message 
*/ 
node.assert.notStrictEqual = function (actual,expected,message) { } 

/** @description assert.ok(value[, message])
* @param {any} value 
* @param {any} message 
*/ 
node.assert.ok = function (value,message) { } 

/** @description assert.strictEqual(actual, expected[, message])
* @param {any} actual 
* @param {any} expected 
* @param {any} message 
*/ 
node.assert.strictEqual = function (actual,expected,message) { } 

/** @description assert.throws(block[, error][, message])
* @param {any} block 
* @param {any} error 
* @param {any} message 
*/ 
node.assert.throws = function (block,error,message) { } 



node.buffer={
	/// <field type='Integer'>`INSPECT_MAX_BYTES` {Number} **Default:** `50` </field>
	INSPECT_MAX_BYTES:{ _Number :true },
	/// <field type='Integer'>`kMaxLength` {Number} The largest size allowed for a single `Buffer` instance </field>
	kMaxLength:{ _Number :true }
}



/** @description Class: Buffer
* @param {Array} array 
*/ 
var Buffer = node.buffer.Buffer = function (array) { } 
node.buffer.Buffer["_Class"] = true;

/** @description Class Method: Buffer.alloc(size[, fill[, encoding]])
* @param {Number} size 
* @param {String | Buffer | Integer} fill 
* @param {String} encoding 
* @return {Buffer} 
*/ 
node.buffer.Buffer.alloc = function (size,fill,encoding) { } 

/** @description Class Method: Buffer.allocUnsafe(size)
* @param {Number} size 
* @return {Buffer} 
*/ 
node.buffer.Buffer.allocUnsafe = function (size) { } 

/** @description Class Method: Buffer.allocUnsafeSlow(size)
* @param {Number} size 
* @return {Buffer} 
*/ 
node.buffer.Buffer.allocUnsafeSlow = function (size) { } 

/** @description Class Method: Buffer.byteLength(string[, encoding])
* @param {String | Buffer | TypedArray | DataView | ArrayBuffer} string 
* @param {String} encoding 
* @return {Number} 
*/ 
node.buffer.Buffer.byteLength = function (string,encoding) { } 

/** @description Class Method: Buffer.compare(buf1, buf2)
* @param {Buffer} buf1 
* @param {Buffer} buf2 
* @return {Number} 
*/ 
node.buffer.Buffer.compare = function (buf1,buf2) { } 

/** @description Class Method: Buffer.concat(list[, totalLength])
* @param {Array} list 
* @param {Number} totalLength 
* @return {Buffer} 
*/ 
node.buffer.Buffer.concat = function (list,totalLength) { } 

/** @description Class Method: Buffer.from(array)
* @param {Array} array 
*/ 
node.buffer.Buffer.from = function (array) { } 

/** @description Class Method: Buffer.from(arrayBuffer[, byteOffset[, length]])
* @param {ArrayBuffer} arrayBuffer 
* @param {Number} byteOffset 
* @param {Number} length 
*/ 
node.buffer.Buffer.from = function (arrayBuffer,byteOffset,length) { } 

/** @description Class Method: Buffer.from(buffer)
* @param {Buffer} buffer 
*/ 
node.buffer.Buffer.from = function (buffer) { } 

/** @description Class Method: Buffer.from(string[, encoding])
* @param {String} string 
* @param {String} encoding 
*/ 
node.buffer.Buffer.from = function (string,encoding) { } 

/** @description Class Method: Buffer.isBuffer(obj)
* @param {Object} obj 
* @return {Boolean} 
*/ 
node.buffer.Buffer.isBuffer = function (obj) { } 

/** @description Class Method: Buffer.isEncoding(encoding)
* @param {String} encoding 
* @return {Boolean} 
*/ 
node.buffer.Buffer.isEncoding = function (encoding) { } 

/** @description buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
* @param {Buffer} target 
* @param {Number} targetStart 
* @param {Number} targetEnd 
* @param {Number} sourceStart 
* @param {Number} sourceEnd 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.compare = function (target,targetStart,targetEnd,sourceStart,sourceEnd) { } 

/** @description buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
* @param {Buffer} target 
* @param {Number} targetStart 
* @param {Number} sourceStart 
* @param {Number} sourceEnd 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.copy = function (target,targetStart,sourceStart,sourceEnd) { } 

/** @description buf.entries()
* @return {Iterator} 
*/ 
node.buffer.Buffer.prototype.entries = function () { } 

/** @description buf.equals(otherBuffer)
* @param {Buffer} otherBuffer 
* @return {Boolean} 
*/ 
node.buffer.Buffer.prototype.equals = function (otherBuffer) { } 

/** @description buf.fill(value[, offset[, end]][, encoding])
* @param {String | Buffer | Integer} value 
* @param {Number} offset 
* @param {Number} end 
* @param {String} encoding 
* @return {Buffer} 
*/ 
node.buffer.Buffer.prototype.fill = function (value,offset,end,encoding) { } 

/** @description buf.indexOf(value[, byteOffset][, encoding])
* @param {String | Buffer | Integer} value 
* @param {Number} byteOffset 
* @param {String} encoding 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.indexOf = function (value,byteOffset,encoding) { } 

/** @description buf.includes(value[, byteOffset][, encoding])
* @param {String | Buffer | Integer} value 
* @param {Number} byteOffset 
* @param {String} encoding 
* @return {Boolean} 
*/ 
node.buffer.Buffer.prototype.includes = function (value,byteOffset,encoding) { } 

/** @description buf.keys()
* @return {Iterator} 
*/ 
node.buffer.Buffer.prototype.keys = function () { } 

/** @description buf.lastIndexOf(value[, byteOffset][, encoding])
* @param {String | Buffer | Integer} value 
* @param {Number} byteOffset 
* @param {String} encoding 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.lastIndexOf = function (value,byteOffset,encoding) { } 

/** @description buf.readDoubleBE(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readDoubleBE = function (offset,noAssert) { } 

/** @description buf.readDoubleLE(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readDoubleLE = function (offset,noAssert) { } 

/** @description buf.readFloatBE(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readFloatBE = function (offset,noAssert) { } 

/** @description buf.readFloatLE(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readFloatLE = function (offset,noAssert) { } 

/** @description buf.readInt8(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readInt8 = function (offset,noAssert) { } 

/** @description buf.readInt16BE(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readInt16BE = function (offset,noAssert) { } 

/** @description buf.readInt16LE(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readInt16LE = function (offset,noAssert) { } 

/** @description buf.readInt32BE(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readInt32BE = function (offset,noAssert) { } 

/** @description buf.readInt32LE(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readInt32LE = function (offset,noAssert) { } 

/** @description buf.readIntBE(offset, byteLength[, noAssert])
* @param {Number} offset 
* @param {Number} byteLength 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readIntBE = function (offset,byteLength,noAssert) { } 

/** @description buf.readIntLE(offset, byteLength[, noAssert])
* @param {Number} offset 
* @param {Number} byteLength 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readIntLE = function (offset,byteLength,noAssert) { } 

/** @description buf.readUInt8(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readUInt8 = function (offset,noAssert) { } 

/** @description buf.readUInt16BE(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readUInt16BE = function (offset,noAssert) { } 

/** @description buf.readUInt16LE(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readUInt16LE = function (offset,noAssert) { } 

/** @description buf.readUInt32BE(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readUInt32BE = function (offset,noAssert) { } 

/** @description buf.readUInt32LE(offset[, noAssert])
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readUInt32LE = function (offset,noAssert) { } 

/** @description buf.readUIntBE(offset, byteLength[, noAssert])
* @param {Number} offset 
* @param {Number} byteLength 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readUIntBE = function (offset,byteLength,noAssert) { } 

/** @description buf.readUIntLE(offset, byteLength[, noAssert])
* @param {Number} offset 
* @param {Number} byteLength 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.readUIntLE = function (offset,byteLength,noAssert) { } 

/** @description buf.slice([start[, end]])
* @param {Number} start 
* @param {Number} end 
* @return {Buffer} 
*/ 
node.buffer.Buffer.prototype.slice = function (start,end) { } 

/** @description buf.swap16()
* @return {Buffer} 
*/ 
node.buffer.Buffer.prototype.swap16 = function () { } 

/** @description buf.swap32()
* @return {Buffer} 
*/ 
node.buffer.Buffer.prototype.swap32 = function () { } 

/** @description buf.swap64()
* @return {Buffer} 
*/ 
node.buffer.Buffer.prototype.swap64 = function () { } 

/** @description buf.toString([encoding[, start[, end]]])
* @param {String} encoding 
* @param {Number} start 
* @param {Number} end 
* @return {String} 
*/ 
node.buffer.Buffer.prototype.toString = function (encoding,start,end) { } 

/** @description buf.toJSON()
* @return {Object} 
*/ 
node.buffer.Buffer.prototype.toJSON = function () { } 

/** @description buf.values()
* @return {Iterator} 
*/ 
node.buffer.Buffer.prototype.values = function () { } 

/** @description buf.write(string[, offset[, length]][, encoding])
* @param {String} string 
* @param {Number} offset 
* @param {Number} length 
* @param {String} encoding 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.write = function (string,offset,length,encoding) { } 

/** @description buf.writeDoubleBE(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeDoubleBE = function (value,offset,noAssert) { } 

/** @description buf.writeDoubleLE(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeDoubleLE = function (value,offset,noAssert) { } 

/** @description buf.writeFloatBE(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeFloatBE = function (value,offset,noAssert) { } 

/** @description buf.writeFloatLE(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeFloatLE = function (value,offset,noAssert) { } 

/** @description buf.writeInt8(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeInt8 = function (value,offset,noAssert) { } 

/** @description buf.writeInt16BE(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeInt16BE = function (value,offset,noAssert) { } 

/** @description buf.writeInt16LE(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeInt16LE = function (value,offset,noAssert) { } 

/** @description buf.writeInt32BE(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeInt32BE = function (value,offset,noAssert) { } 

/** @description buf.writeInt32LE(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeInt32LE = function (value,offset,noAssert) { } 

/** @description buf.writeIntBE(value, offset, byteLength[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Number} byteLength 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeIntBE = function (value,offset,byteLength,noAssert) { } 

/** @description buf.writeIntLE(value, offset, byteLength[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Number} byteLength 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeIntLE = function (value,offset,byteLength,noAssert) { } 

/** @description buf.writeUInt8(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeUInt8 = function (value,offset,noAssert) { } 

/** @description buf.writeUInt16BE(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeUInt16BE = function (value,offset,noAssert) { } 

/** @description buf.writeUInt16LE(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeUInt16LE = function (value,offset,noAssert) { } 

/** @description buf.writeUInt32BE(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeUInt32BE = function (value,offset,noAssert) { } 

/** @description buf.writeUInt32LE(value, offset[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeUInt32LE = function (value,offset,noAssert) { } 

/** @description buf.writeUIntBE(value, offset, byteLength[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Number} byteLength 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeUIntBE = function (value,offset,byteLength,noAssert) { } 

/** @description buf.writeUIntLE(value, offset, byteLength[, noAssert])
* @param {Number} value 
* @param {Number} offset 
* @param {Number} byteLength 
* @param {Boolean} noAssert 
* @return {Number} 
*/ 
node.buffer.Buffer.prototype.writeUIntLE = function (value,offset,byteLength,noAssert) { } 
node.buffer.Buffer.poolSize={ _Number :true }
node.buffer.Buffer.length={ _Number :true }


/** @description Class: SlowBuffer
* @param {Number} size 
*/ 
var SlowBuffer = node.buffer.SlowBuffer = function (size) { } 
node.buffer.SlowBuffer["_Class"] = true;









node.child_process={}




/** @description child_process.exec(command[, options][, callback])
* @param {String} command 
* @param {Object} options 
* @param {Function} callback 
* @return {ChildProcess} 
*/ 
node.child_process.exec = function (command,options,callback) { } 

/** @description child_process.execFile(file[, args][, options][, callback])
* @param {String} file 
* @param {Array} args 
* @param {Object} options 
* @param {Function} callback 
* @return {ChildProcess} 
*/ 
node.child_process.execFile = function (file,args,options,callback) { } 

/** @description child_process.fork(modulePath[, args][, options])
* @param {String} modulePath 
* @param {Array} args 
* @param {Object} options 
* @return {ChildProcess} 
*/ 
node.child_process.fork = function (modulePath,args,options) { } 

/** @description child_process.spawn(command[, args][, options])
* @param {String} command 
* @param {Array} args 
* @param {Object} options 
* @return {ChildProcess} 
*/ 
node.child_process.spawn = function (command,args,options) { } 

 

/** @description child_process.execFileSync(file[, args][, options])
* @param {String} file 
* @param {Array} args 
* @param {Object} options 
* @return {Buffer|String} 
*/ 
node.child_process.execFileSync = function (file,args,options) { } 

/** @description child_process.execSync(command[, options])
* @param {String} command 
* @param {Object} options 
* @return {Buffer|String} 
*/ 
node.child_process.execSync = function (command,options) { } 

/** @description child_process.spawnSync(command[, args][, options])
* @param {String} command 
* @param {Array} args 
* @param {Object} options 
* @return {Object} 
*/ 
node.child_process.spawnSync = function (command,args,options) { } 





/** @description Class: ChildProcess
*/ 
var ChildProcess = node.child_process.ChildProcess = function () { 
	this.connected={ _Boolean :true }
	this.pid={ _Number :true }
	this.stderr={ _Stream :true }
	this.stdin={ _Stream :true }
	this.stdio={ _Array :true }
	this.stdout={ _Stream :true }
} 
node.child_process.ChildProcess["_Class"]=true;

/** @description child.disconnect()
*/ 
node.child_process.ChildProcess.prototype.disconnect = function () { } 

/** @description child.kill([signal])
* @param {String} signal 
*/ 
node.child_process.ChildProcess.prototype.kill = function (signal) { } 

/** @description child.send(message[, sendHandle[, options]][, callback])
* @param {Object} message 
* @param {Handle} sendHandle 
* @param {Object} options 
* @param {Function} callback 
* @return {Boolean} 
*/ 
node.child_process.ChildProcess.prototype.send = function (message,sendHandle,options,callback) { } 







node.cluster={
	isMaster:{ _Boolean :true },
	isWorker:{ _Boolean :true },
	schedulingPolicy:{  },
	settings:{ _Object :true },
	worker:{ _Object :true },
	workers:{ _Object :true }
}
var cluster={};
/** @description Class: Worker
*/ 
cluster.Worker = node.cluster.Worker = function () { } 
node.cluster.Worker["_Class"]=true;

/** @description worker.disconnect()
*/ 
node.cluster.Worker.prototype.disconnect = function () { } 

/** @description worker.isConnected()
*/ 
node.cluster.Worker.prototype.isConnected = function () { } 

/** @description worker.isDead()
*/ 
node.cluster.Worker.prototype.isDead = function () { } 

/** @description worker.kill([signal='SIGTERM'])
* @param {String} signal 
*/ 
node.cluster.Worker.prototype.kill = function (signal) { } 

/** @description worker.send(message[, sendHandle][, callback])
* @param {Object} message 
* @param {Handle} sendHandle 
* @param {Function} callback 
* @return {undefined} 
*/ 
node.cluster.Worker.prototype.send = function (message,sendHandle,callback) { } 

node.cluster.Worker.exitedAfterDisconnect={ _Boolean :true }
node.cluster.Worker.id={ _Number :true }
node.cluster.Worker.process={ _ChildProcess :true }
node.cluster.Worker.suicide={ _undefined :true }


/** @description cluster.disconnect([callback])
* @param {Function} callback 
*/ 
node.cluster.disconnect = function (callback) { } 

/** @description cluster.fork([env])
* @param {Object} env 
* @return {cluster.Worker} 
*/ 
node.cluster.fork = function (env) { } 

/** @description cluster.setupMaster([settings])
* @param {Object} settings 
*/ 
node.cluster.setupMaster = function (settings) { } 














node.console={}
global.console = node.console;
/** @description Class: Console
* @param {any} stdout 
* @param {any} stderr 
*/ 
node.console.Console = function (stdout,stderr) { } 

/** @description console.assert(value[, message][, ...])
* @param {any} value 
* @param {any} message 
* @param {any} ... 
*/ 
node.console.Console.prototype.assert = function (value,message,...) { } 

/** @description console.dir(obj[, options])
* @param {any} obj 
* @param {any} options 
*/ 
node.console.Console.prototype.dir = function (obj,options) { } 

/** @description console.error([data][, ...])
* @param {any} data 
* @param {any} ... 
*/ 
node.console.Console.prototype.error = function (data,...) { } 

/** @description console.info([data][, ...])
* @param {any} data 
* @param {any} ... 
*/ 
node.console.Console.prototype.info = function (data,...) { } 

/** @description console.log([data][, ...])
* @param {any} data 
* @param {any} ... 
*/ 
node.console.Console.prototype.log = function (data,...) { } 

/** @description console.time(label)
* @param {any} label 
*/ 
node.console.Console.prototype.time = function (label) { } 

/** @description console.timeEnd(label)
* @param {any} label 
*/ 
node.console.Console.prototype.timeEnd = function (label) { } 

/** @description console.trace(message[, ...])
* @param {any} message 
* @param {any} ... 
*/ 
node.console.Console.prototype.trace = function (message,...) { } 

/** @description console.warn([data][, ...])
* @param {any} data 
* @param {any} ... 
*/ 
node.console.Console.prototype.warn = function (data,...) { } 
















node.crypto={};
var crypto=function(){};

/** @description Class: Certificate
*/ 
crypto.Certificate =  node.crypto.Certificate = function () { } 
node.crypto.Certificate["_Class"] = true;


/** @description certificate.exportChallenge(spkac)
* @param {any} spkac 
*/ 
node.crypto.Certificate.prototype.exportChallenge = function (spkac) { } 

/** @description certificate.exportPublicKey(spkac)
* @param {any} spkac 
*/ 
node.crypto.Certificate.prototype.exportPublicKey = function (spkac) { } 

/** @description certificate.verifySpkac(spkac)
* @param {any} spkac 
*/ 
node.crypto.Certificate.prototype.verifySpkac = function (spkac) { } 



/** @description Class: Cipher
*/ 
crypto.Cipher = node.crypto.Cipher = function () { } 
node.crypto.Cipher["_Class"] = true;

/** @description cipher.final([output_encoding])
* @param {any} output_encoding 
*/ 
node.crypto.Cipher.prototype.final = function (output_encoding) { } 

/** @description cipher.setAAD(buffer)
* @param {any} buffer 
*/ 
node.crypto.Cipher.prototype.setAAD = function (buffer) { } 

/** @description cipher.getAuthTag()
*/ 
node.crypto.Cipher.prototype.getAuthTag = function () { } 

/** @description cipher.setAutoPadding(auto_padding=true)
* @param {any} auto_padding 
*/ 
node.crypto.Cipher.prototype.setAutoPadding = function (auto_padding) { } 

/** @description cipher.update(data[, input_encoding][, output_encoding])
* @param {any} data 
* @param {any} input_encoding 
* @param {any} output_encoding 
*/ 
node.crypto.Cipher.prototype.update = function (data,input_encoding,output_encoding) { } 



/** @description Class: Decipher
*/ 
crypto.Decipher = node.crypto.Decipher = function () { } 
node.crypto.Decipher["_Class"]=true;
/** @description decipher.final([output_encoding])
* @param {any} output_encoding 
*/ 
node.crypto.Decipher.prototype.final = function (output_encoding) { } 

/** @description decipher.setAAD(buffer)
* @param {any} buffer 
*/ 
node.crypto.Decipher.prototype.setAAD = function (buffer) { } 

/** @description decipher.setAuthTag(buffer)
* @param {any} buffer 
*/ 
node.crypto.Decipher.prototype.setAuthTag = function (buffer) { } 

/** @description decipher.setAutoPadding(auto_padding=true)
* @param {any} auto_padding 
*/ 
node.crypto.Decipher.prototype.setAutoPadding = function (auto_padding) { } 

/** @description decipher.update(data[, input_encoding][, output_encoding])
* @param {any} data 
* @param {any} input_encoding 
* @param {any} output_encoding 
*/ 
node.crypto.Decipher.prototype.update = function (data,input_encoding,output_encoding) { } 



/** @description Class: DiffieHellman
*/ 
crypto.DiffieHellman =  node.crypto.DiffieHellman = function () { } 
node.crypto.DiffieHellman["_Class"]=true;

/** @description diffieHellman.computeSecret(other_public_key[, input_encoding][, output_encoding])
* @param {any} other_public_key 
* @param {any} input_encoding 
* @param {any} output_encoding 
*/ 
node.crypto.DiffieHellman.prototype.computeSecret = function (other_public_key,input_encoding,output_encoding) { } 

/** @description diffieHellman.generateKeys([encoding])
* @param {any} encoding 
*/ 
node.crypto.DiffieHellman.prototype.generateKeys = function (encoding) { } 

/** @description diffieHellman.getGenerator([encoding])
* @param {any} encoding 
*/ 
node.crypto.DiffieHellman.prototype.getGenerator = function (encoding) { } 

/** @description diffieHellman.getPrime([encoding])
* @param {any} encoding 
*/ 
node.crypto.DiffieHellman.prototype.getPrime = function (encoding) { } 

/** @description diffieHellman.getPrivateKey([encoding])
* @param {any} encoding 
*/ 
node.crypto.DiffieHellman.prototype.getPrivateKey = function (encoding) { } 

/** @description diffieHellman.getPublicKey([encoding])
* @param {any} encoding 
*/ 
node.crypto.DiffieHellman.prototype.getPublicKey = function (encoding) { } 

/** @description diffieHellman.setPrivateKey(private_key[, encoding])
* @param {any} private_key 
* @param {any} encoding 
*/ 
node.crypto.DiffieHellman.prototype.setPrivateKey = function (private_key,encoding) { } 

/** @description diffieHellman.setPublicKey(public_key[, encoding])
* @param {any} public_key 
* @param {any} encoding 
*/ 
node.crypto.DiffieHellman.prototype.setPublicKey = function (public_key,encoding) { } 
node.crypto.DiffieHellman.verifyError={  }





/** @description Class: ECDH
*/ 
crypto.ECDH  = node.crypto.ECDH = function () { } 
node.crypto.ECDH["_Class"] = true;

/** @description ecdh.computeSecret(other_public_key[, input_encoding][, output_encoding])
* @param {any} other_public_key 
* @param {any} input_encoding 
* @param {any} output_encoding 
*/ 
node.crypto.ECDH.prototype.computeSecret = function (other_public_key,input_encoding,output_encoding) { } 

/** @description ecdh.generateKeys([encoding[, format]])
* @param {any} encoding 
* @param {any} format 
*/ 
node.crypto.ECDH.prototype.generateKeys = function (encoding,format) { } 

/** @description ecdh.getPrivateKey([encoding])
* @param {any} encoding 
*/ 
node.crypto.ECDH.prototype.getPrivateKey = function (encoding) { } 

/** @description ecdh.getPublicKey([encoding[, format]])
* @param {any} encoding 
* @param {any} format 
*/ 
node.crypto.ECDH.prototype.getPublicKey = function (encoding,format) { } 

/** @description ecdh.setPrivateKey(private_key[, encoding])
* @param {any} private_key 
* @param {any} encoding 
*/ 
node.crypto.ECDH.prototype.setPrivateKey = function (private_key,encoding) { } 

/** @description ecdh.setPublicKey(public_key[, encoding])
* @param {any} public_key 
* @param {any} encoding 
*/ 
node.crypto.ECDH.prototype.setPublicKey = function (public_key,encoding) { } 



/** @description Class: Hash
*/
crypto.Hash  = node.crypto.Hash = function () { } 
node.crypto.Hash["_Class"] = true;

/** @description hash.digest([encoding])
* @param {any} encoding 
*/ 
node.crypto.Hash.prototype.digest = function (encoding) { } 

/** @description hash.update(data[, input_encoding])
* @param {any} data 
* @param {any} input_encoding 
*/ 
node.crypto.Hash.prototype.update = function (data,input_encoding) { } 



/** @description Class: Hmac
*/ 
crypto.Hmac  = node.crypto.Hmac = function () { } 
node.crypto.Hmac["_Class"] = true;

/** @description hmac.digest([encoding])
* @param {any} encoding 
*/ 
node.crypto.Hmac.prototype.digest = function (encoding) { } 

/** @description hmac.update(data[, input_encoding])
* @param {any} data 
* @param {any} input_encoding 
*/ 
node.crypto.Hmac.prototype.update = function (data,input_encoding) { } 



/** @description Class: Sign
*/ 
crypto.Sign  = node.crypto.Sign = function () { } 
node.crypto.Sign["_Class"] = true;

/** @description sign.sign(private_key[, output_format])
* @param {any} private_key 
* @param {any} output_format 
*/ 
node.crypto.Sign.prototype.sign = function (private_key,output_format) { } 

/** @description sign.update(data[, input_encoding])
* @param {any} data 
* @param {any} input_encoding 
*/ 
node.crypto.Sign.prototype.update = function (data,input_encoding) { } 



/** @description Class: Verify
*/ 
crypto.Verify  = node.crypto.Verify = function () { } 
node.crypto.Verify["_Class"] = true;

/** @description verifier.update(data[, input_encoding])
* @param {any} data 
* @param {any} input_encoding 
*/ 
node.crypto.Verify.prototype.update = function (data,input_encoding) { } 

/** @description verifier.verify(object, signature[, signature_format])
* @param {any} object 
* @param {any} signature 
* @param {any} signature_format 
*/ 
node.crypto.Verify.prototype.verify = function (object,signature,signature_format) { } 


 

/** @description crypto.createCipher(algorithm, password)
* @param {any} algorithm 
* @param {any} password 
* @return {crypto.Cipher} 
*/ 
node.crypto.createCipher = function (algorithm,password) { } 

/** @description crypto.createCipheriv(algorithm, key, iv)
* @param {any} algorithm 
* @param {any} key 
* @param {any} iv 
* @return {crypto.Cipher} 
*/ 
node.crypto.createCipheriv = function (algorithm,key,iv) { } 

/** @description crypto.createCredentials(details)
* @param {any} details 
*/ 
node.crypto.createCredentials = function (details) { } 

/** @description crypto.createDecipher(algorithm, password)
* @param {any} algorithm 
* @param {any} password 
* @return {crypto.Decipher} 
*/ 
node.crypto.createDecipher = function (algorithm,password) { } 

/** @description crypto.createDecipheriv(algorithm, key, iv)
* @param {any} algorithm 
* @param {any} key 
* @param {any} iv 
* @return {crypto.Decipher} 
*/ 
node.crypto.createDecipheriv = function (algorithm,key,iv) { } 

/** @description crypto.createDiffieHellman(prime[, prime_encoding][, generator][, generator_encoding])
* @param {any} prime 
* @param {any} prime_encoding 
* @param {any} generator 
* @param {any} generator_encoding 
* @return {crypto.DiffieHellman} 
*/ 
node.crypto.createDiffieHellman = function (prime,prime_encoding,generator,generator_encoding) { } 

/** @description crypto.createDiffieHellman(prime_length[, generator])
* @param {any} prime_length 
* @param {any} generator 
* @return {crypto.DiffieHellman} 
*/ 
node.crypto.createDiffieHellman = function (prime_length,generator) { } 

/** @description crypto.createECDH(curve_name)
* @param {any} curve_name 
* @return {crypto.ECDH} 
*/ 
node.crypto.createECDH = function (curve_name) { } 

/** @description crypto.createHash(algorithm)
* @param {any} algorithm
* @return {crypto.Hash}  
*/ 
node.crypto.createHash = function (algorithm) { } 

/** @description crypto.createHmac(algorithm, key)
* @param {any} algorithm 
* @param {any} key 
* @return {crypto.Hmac}  
*/ 
node.crypto.createHmac = function (algorithm,key) { } 

/** @description crypto.createSign(algorithm)
* @param {any} algorithm 
* @return {crypto.Sign}  
*/ 
node.crypto.createSign = function (algorithm) { } 

/** @description crypto.createVerify(algorithm)
* @param {any} algorithm 
* @return {crypto.Verify}  
*/ 
node.crypto.createVerify = function (algorithm) { } 

/** @description crypto.getCiphers()
*/ 
node.crypto.getCiphers = function () { } 

/** @description crypto.getCurves()
*/ 
node.crypto.getCurves = function () { } 

/** @description crypto.getDiffieHellman(group_name)
* @param {any} group_name 
*/ 
node.crypto.getDiffieHellman = function (group_name) { } 

/** @description crypto.getHashes()
*/ 
node.crypto.getHashes = function () { } 

/** @description crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)
* @param {any} password 
* @param {any} salt 
* @param {any} iterations 
* @param {any} keylen 
* @param {any} digest 
* @param {any} callback 
*/ 
node.crypto.pbkdf2 = function (password,salt,iterations,keylen,digest,callback) { } 

/** @description crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
* @param {any} password 
* @param {any} salt 
* @param {any} iterations 
* @param {any} keylen 
* @param {any} digest 
*/ 
node.crypto.pbkdf2Sync = function (password,salt,iterations,keylen,digest) { } 

/** @description crypto.privateDecrypt(private_key, buffer)
* @param {any} private_key 
* @param {any} buffer 
*/ 
node.crypto.privateDecrypt = function (private_key,buffer) { } 

/** @description crypto.privateEncrypt(private_key, buffer)
* @param {any} private_key 
* @param {any} buffer 
*/ 
node.crypto.privateEncrypt = function (private_key,buffer) { } 

/** @description crypto.publicDecrypt(public_key, buffer)
* @param {any} public_key 
* @param {any} buffer 
*/ 
node.crypto.publicDecrypt = function (public_key,buffer) { } 

/** @description crypto.publicEncrypt(public_key, buffer)
* @param {any} public_key 
* @param {any} buffer 
*/ 
node.crypto.publicEncrypt = function (public_key,buffer) { } 

/** @description crypto.randomBytes(size[, callback])
* @param {any} size 
* @param {any} callback 
*/ 
node.crypto.randomBytes = function (size,callback) { } 

/** @description crypto.setEngine(engine[, flags])
* @param {any} engine 
* @param {any} flags 
*/ 
node.crypto.setEngine = function (engine,flags) { } 

node.crypto.DEFAULT_ENCODING={ }


node.crypto.fips={ }




node.dns={}

 


/** @description dns.getServers()
*/ 
node.dns.getServers = function () { } 

/** @description dns.lookup(hostname[, options], callback)
* @param {any} hostname 
* @param {any} options 
* @param {any} callback 
*/ 
node.dns.lookup = function (hostname,options,callback) { } 

/** @description dns.lookupService(address, port, callback)
* @param {any} address 
* @param {any} port 
* @param {any} callback 
*/ 
node.dns.lookupService = function (address,port,callback) { } 

/** @description dns.resolve(hostname[, rrtype], callback)
* @param {any} hostname 
* @param {any} rrtype 
* @param {any} callback 
*/ 
node.dns.resolve = function (hostname,rrtype,callback) { } 

/** @description dns.resolve4(hostname, callback)
* @param {any} hostname 
* @param {any} callback 
*/ 
node.dns.resolve4 = function (hostname,callback) { } 

/** @description dns.resolve6(hostname, callback)
* @param {any} hostname 
* @param {any} callback 
*/ 
node.dns.resolve6 = function (hostname,callback) { } 

/** @description dns.resolveCname(hostname, callback)
* @param {any} hostname 
* @param {any} callback 
*/ 
node.dns.resolveCname = function (hostname,callback) { } 

/** @description dns.resolveMx(hostname, callback)
* @param {any} hostname 
* @param {any} callback 
*/ 
node.dns.resolveMx = function (hostname,callback) { } 

/** @description dns.resolveNaptr(hostname, callback)
* @param {any} hostname 
* @param {any} callback 
*/ 
node.dns.resolveNaptr = function (hostname,callback) { } 

/** @description dns.resolveNs(hostname, callback)
* @param {any} hostname 
* @param {any} callback 
*/ 
node.dns.resolveNs = function (hostname,callback) { } 

/** @description dns.resolveSoa(hostname, callback)
* @param {any} hostname 
* @param {any} callback 
*/ 
node.dns.resolveSoa = function (hostname,callback) { } 

/** @description dns.resolveSrv(hostname, callback)
* @param {any} hostname 
* @param {any} callback 
*/ 
node.dns.resolveSrv = function (hostname,callback) { } 

/** @description dns.resolvePtr(hostname, callback)
* @param {any} hostname 
* @param {any} callback 
*/ 
node.dns.resolvePtr = function (hostname,callback) { } 

/** @description dns.resolveTxt(hostname, callback)
* @param {any} hostname 
* @param {any} callback 
*/ 
node.dns.resolveTxt = function (hostname,callback) { } 

/** @description dns.reverse(ip, callback)
* @param {any} ip 
* @param {any} callback 
*/ 
node.dns.reverse = function (ip,callback) { } 

/** @description dns.setServers(servers)
* @param {any} servers 
*/ 
node.dns.setServers = function (servers) { } 




node.domain={}


/** @description Class: Domain
*/ 
node.domain.Domain = function () { } 
node.domain.Domain["_Class"] = true;

/** @description domain.run(fn[, arg][, ...])
* @param {Function} fn 
* @param {any} arg 
* @param {any} ... 
*/ 
node.domain.Domain.prototype.run = function (fn,arg,...) { } 

/** @description domain.add(emitter)
* @param {EventEmitter|Timer} emitter 
*/ 
node.domain.Domain.prototype.add = function (emitter) { } 

/** @description domain.remove(emitter)
* @param {EventEmitter|Timer} emitter 
*/ 
node.domain.Domain.prototype.remove = function (emitter) { } 

/** @description domain.bind(callback)
* @param {Function} callback 
* @return {Function} 
*/ 
node.domain.Domain.prototype.bind = function (callback) { } 

/** @description domain.intercept(callback)
* @param {Function} callback 
* @return {Function} 
*/ 
node.domain.Domain.prototype.intercept = function (callback) { } 

/** @description domain.enter()
*/ 
node.domain.Domain.prototype.enter = function () { } 

/** @description domain.exit()
*/ 
node.domain.Domain.prototype.exit = function () { } 

/** @description domain.dispose()
*/ 
node.domain.Domain.prototype.dispose = function () { } 
node.domain.Domain.members={ _Array :true }


/** @description domain.create()
* @return {Domain} 
*/ 
node.domain.create = function () { } 




node.events={}

 
/** @description Class: EventEmitter
*/ 
node.events.EventEmitter = function () { } 
node.events.EventEmitter["_Class"] = true;

/** @description EventEmitter.listenerCount(emitter, eventName)
* @param {any} emitter 
* @param {any} eventName 
*/ 
node.events.EventEmitter.prototype.listenerCount = function (emitter,eventName) { } 

/** @description emitter.addListener(eventName, listener)
* @param {any} eventName 
* @param {any} listener 
*/ 
node.events.EventEmitter.prototype.addListener = function (eventName,listener) { } 

/** @description emitter.emit(eventName[, arg1][, arg2][, ...])
* @param {any} eventName 
* @param {any} arg1 
* @param {any} arg2 
* @param {any} ... 
*/ 
node.events.EventEmitter.prototype.emit = function (eventName,arg1,arg2,...) { } 

/** @description emitter.eventNames()
*/ 
node.events.EventEmitter.prototype.eventNames = function () { } 

/** @description emitter.getMaxListeners()
*/ 
node.events.EventEmitter.prototype.getMaxListeners = function () { } 

/** @description emitter.listenerCount(eventName)
* @param {String|Symbol} eventName 
*/ 
node.events.EventEmitter.prototype.listenerCount = function (eventName) { } 

/** @description emitter.listeners(eventName)
* @param {any} eventName 
*/ 
node.events.EventEmitter.prototype.listeners = function (eventName) { } 

/** @description emitter.on(eventName, listener)
* @param {String|Symbol} eventName 
* @param {Function} listener 
*/ 
node.events.EventEmitter.prototype.on = function (eventName,listener) { } 

/** @description emitter.once(eventName, listener)
* @param {String|Symbol} eventName 
* @param {Function} listener 
*/ 
node.events.EventEmitter.prototype.once = function (eventName,listener) { } 

/** @description emitter.prependListener(eventName, listener)
* @param {String|Symbol} eventName 
* @param {Function} listener 
*/ 
node.events.EventEmitter.prototype.prependListener = function (eventName,listener) { } 

/** @description emitter.prependOnceListener(eventName, listener)
* @param {String|Symbol} eventName 
* @param {Function} listener 
*/ 
node.events.EventEmitter.prototype.prependOnceListener = function (eventName,listener) { } 

/** @description emitter.removeAllListeners([eventName])
* @param {any} eventName 
*/ 
node.events.EventEmitter.prototype.removeAllListeners = function (eventName) { } 

/** @description emitter.removeListener(eventName, listener)
* @param {any} eventName 
* @param {any} listener 
*/ 
node.events.EventEmitter.prototype.removeListener = function (eventName,listener) { } 

/** @description emitter.setMaxListeners(n)
* @param {any} n 
*/ 
node.events.EventEmitter.prototype.setMaxListeners = function (n) { } 
node.events.EventEmitter.defaultMaxListeners={ _undefined :true }




node.fs={}
var fs = function(){}

/** @description Class: Objects returned from fs.watch() are of this type.
*/ 
node.fs.FSWatcher = function () { } 
node.fs.FSWatcher["_Class"] = true;
fs.FSWatcher = node.fs.FSWatcher;

/** @description watcher.close()
*/ 
node.fs.FSWatcher.prototype.close = function () { } 




/** @description Class: ReadStream is a Readable Stream.
*/ 
node.fs.ReadStream = function () { } 
node.fs.ReadStream["_Class"] = true;
fs.ReadStream = node.fs.ReadStream;

node.fs.ReadStream.bytesRead={ }
node.fs.ReadStream.path={ }



/** @description Class: Objects returned from fs.stat(), fs.lstat() and fs.fstat() and their synchronous counterparts are of this type.
*/ 
node.fs.Stats = function () { } 
node.fs.Stats["_Class"] = true;
fs.Stats = node.fs.Stats;

/** @description Class: WriteStream is a Writable Stream.
*/ 
node.fs.WriteStream = function () { } 
node.fs.WriteStream["_Class"] = true;
fs.WriteStream = node.fs.WriteStream;

node.fs.WriteStream.bytesWritten={ }
node.fs.WriteStream.path={}


/** @description fs.access(path[, mode], callback)
* @param {String | Buffer} path 
* @param {Number} mode 
* @param {Function} callback 
*/ 
node.fs.access = function (path,mode,callback) { } 

/** @description fs.accessSync(path[, mode])
* @param {String | Buffer} path 
* @param {Number} mode 
*/ 
node.fs.accessSync = function (path,mode) { } 

/** @description fs.appendFile(file, data[, options], callback)
* @param {String | Buffer | Number} file 
* @param {String | Buffer} data 
* @param {Object | String} options 
* @param {Function} callback 
*/ 
node.fs.appendFile = function (file,data,options,callback) { } 

/** @description fs.appendFileSync(file, data[, options])
* @param {String | Buffer | Number} file 
* @param {String | Buffer} data 
* @param {Object | String} options 
*/ 
node.fs.appendFileSync = function (file,data,options) { } 

/** @description fs.chmod(path, mode, callback)
* @param {String | Buffer} path 
* @param {Number} mode 
* @param {Function} callback 
*/ 
node.fs.chmod = function (path,mode,callback) { } 

/** @description fs.chmodSync(path, mode)
* @param {String | Buffer} path 
* @param {Number} mode 
*/ 
node.fs.chmodSync = function (path,mode) { } 

/** @description fs.chown(path, uid, gid, callback)
* @param {String | Buffer} path 
* @param {Number} uid 
* @param {Number} gid 
* @param {Function} callback 
*/ 
node.fs.chown = function (path,uid,gid,callback) { } 

/** @description fs.chownSync(path, uid, gid)
* @param {String | Buffer} path 
* @param {Number} uid 
* @param {Number} gid 
*/ 
node.fs.chownSync = function (path,uid,gid) { } 

/** @description fs.close(fd, callback)
* @param {Number} fd 
* @param {Function} callback 
*/ 
node.fs.close = function (fd,callback) { } 

/** @description fs.closeSync(fd)
* @param {Number} fd 
*/ 
node.fs.closeSync = function (fd) { } 

/** @description fs.createReadStream(path[, options])
* @param {String | Buffer} path 
* @param {String | Object} options
* @return {fs.ReadStream} 
*/ 
node.fs.createReadStream = function (path,options) { } 

/** @description fs.createWriteStream(path[, options])
* @param {String | Buffer} path 
* @param {String | Object} options 
* @return {fs.WriteStream} 
*/ 
node.fs.createWriteStream = function (path,options) { } 

/** @description fs.exists(path, callback)
* @param {String | Buffer} path 
* @param {Function} callback 
*/ 
node.fs.exists = function (path,callback) { } 

/** @description fs.existsSync(path)
* @param {String | Buffer} path 
*/ 
node.fs.existsSync = function (path) { } 

/** @description fs.fchmod(fd, mode, callback)
* @param {Number} fd 
* @param {Number} mode 
* @param {Function} callback 
*/ 
node.fs.fchmod = function (fd,mode,callback) { } 

/** @description fs.fchmodSync(fd, mode)
* @param {Number} fd 
* @param {Number} mode 
*/ 
node.fs.fchmodSync = function (fd,mode) { } 

/** @description fs.fchown(fd, uid, gid, callback)
* @param {Number} fd 
* @param {Number} uid 
* @param {Number} gid 
* @param {Function} callback 
*/ 
node.fs.fchown = function (fd,uid,gid,callback) { } 

/** @description fs.fchownSync(fd, uid, gid)
* @param {Number} fd 
* @param {Number} uid 
* @param {Number} gid 
*/ 
node.fs.fchownSync = function (fd,uid,gid) { } 

/** @description fs.fdatasync(fd, callback)
* @param {Number} fd 
* @param {Function} callback 
*/ 
node.fs.fdatasync = function (fd,callback) { } 

/** @description fs.fdatasyncSync(fd)
* @param {Number} fd 
*/ 
node.fs.fdatasyncSync = function (fd) { } 

/** @description fs.fstat(fd, callback)
* @param {Number} fd 
* @param {Function} callback 
*/ 
node.fs.fstat = function (fd,callback) { } 

/** @description fs.fstatSync(fd)
* @param {Number} fd 
*/ 
node.fs.fstatSync = function (fd) { } 

/** @description fs.fsync(fd, callback)
* @param {Number} fd 
* @param {Function} callback 
*/ 
node.fs.fsync = function (fd,callback) { } 

/** @description fs.fsyncSync(fd)
* @param {Number} fd 
*/ 
node.fs.fsyncSync = function (fd) { } 

/** @description fs.ftruncate(fd, len, callback)
* @param {Number} fd 
* @param {Number} len 
* @param {Function} callback 
*/ 
node.fs.ftruncate = function (fd,len,callback) { } 

/** @description fs.ftruncateSync(fd, len)
* @param {Number} fd 
* @param {Number} len 
*/ 
node.fs.ftruncateSync = function (fd,len) { } 

/** @description fs.futimes(fd, atime, mtime, callback)
* @param {Number} fd 
* @param {Number} atime 
* @param {Number} mtime 
* @param {Function} callback 
*/ 
node.fs.futimes = function (fd,atime,mtime,callback) { } 

/** @description fs.futimesSync(fd, atime, mtime)
* @param {Number} fd 
* @param {Number} atime 
* @param {Number} mtime 
*/ 
node.fs.futimesSync = function (fd,atime,mtime) { } 

/** @description fs.lchmod(path, mode, callback)
* @param {String | Buffer} path 
* @param {Number} mode 
* @param {Function} callback 
*/ 
node.fs.lchmod = function (path,mode,callback) { } 

/** @description fs.lchmodSync(path, mode)
* @param {String | Buffer} path 
* @param {Number} mode 
*/ 
node.fs.lchmodSync = function (path,mode) { } 

/** @description fs.lchown(path, uid, gid, callback)
* @param {String | Buffer} path 
* @param {Number} uid 
* @param {Number} gid 
* @param {Function} callback 
*/ 
node.fs.lchown = function (path,uid,gid,callback) { } 

/** @description fs.lchownSync(path, uid, gid)
* @param {String | Buffer} path 
* @param {Number} uid 
* @param {Number} gid 
*/ 
node.fs.lchownSync = function (path,uid,gid) { } 

/** @description fs.link(srcpath, dstpath, callback)
* @param {String | Buffer} srcpath 
* @param {String | Buffer} dstpath 
* @param {Function} callback 
*/ 
node.fs.link = function (srcpath,dstpath,callback) { } 

/** @description fs.linkSync(srcpath, dstpath)
* @param {String | Buffer} srcpath 
* @param {String | Buffer} dstpath 
*/ 
node.fs.linkSync = function (srcpath,dstpath) { } 

/** @description fs.lstat(path, callback)
* @param {String | Buffer} path 
* @param {Function} callback 
*/ 
node.fs.lstat = function (path,callback) { } 

/** @description fs.lstatSync(path)
* @param {String | Buffer} path 
*/ 
node.fs.lstatSync = function (path) { } 

/** @description fs.mkdir(path[, mode], callback)
* @param {String | Buffer} path 
* @param {Number} mode 
* @param {Function} callback 
*/ 
node.fs.mkdir = function (path,mode,callback) { } 

/** @description fs.mkdirSync(path[, mode])
* @param {String | Buffer} path 
* @param {Number} mode 
*/ 
node.fs.mkdirSync = function (path,mode) { } 

/** @description fs.mkdtemp(prefix, callback)
* @param {any} prefix 
* @param {any} callback 
*/ 
node.fs.mkdtemp = function (prefix,callback) { } 

/** @description fs.mkdtempSync(prefix)
* @param {any} prefix 
*/ 
node.fs.mkdtempSync = function (prefix) { } 

/** @description fs.open(path, flags[, mode], callback)
* @param {String | Buffer} path 
* @param {String | Number} flags 
* @param {Number} mode 
* @param {Function} callback 
*/ 
node.fs.open = function (path,flags,mode,callback) { } 

/** @description fs.openSync(path, flags[, mode])
* @param {String | Buffer} path 
* @param {String | Number} flags 
* @param {Number} mode 
*/ 
node.fs.openSync = function (path,flags,mode) { } 

/** @description fs.read(fd, buffer, offset, length, position, callback)
* @param {Number} fd 
* @param {String | Buffer} buffer 
* @param {Number} offset 
* @param {Number} length 
* @param {Number} position 
* @param {Function} callback 
*/ 
node.fs.read = function (fd,buffer,offset,length,position,callback) { } 

/** @description fs.readdir(path[, options], callback)
* @param {String | Buffer} path 
* @param {String | Object} options 
* @param {Function} callback 
*/ 
node.fs.readdir = function (path,options,callback) { } 

/** @description fs.readdirSync(path[, options])
* @param {String | Buffer} path 
* @param {String | Object} options 
*/ 
node.fs.readdirSync = function (path,options) { } 

/** @description fs.readFile(file[, options], callback)
* @param {String | Buffer | Integer} file 
* @param {Object | String} options 
* @param {Function} callback 
*/ 
node.fs.readFile = function (file,options,callback) { } 

/** @description fs.readFileSync(file[, options])
* @param {String | Buffer | Integer} file 
* @param {Object | String} options 
*/ 
node.fs.readFileSync = function (file,options) { } 

/** @description fs.readlink(path[, options], callback)
* @param {String | Buffer} path 
* @param {String | Object} options 
* @param {Function} callback 
*/ 
node.fs.readlink = function (path,options,callback) { } 

/** @description fs.readlinkSync(path[, options])
* @param {String | Buffer} path 
* @param {String | Object} options 
*/ 
node.fs.readlinkSync = function (path,options) { } 

/** @description fs.readSync(fd, buffer, offset, length, position)
* @param {Number} fd 
* @param {String | Buffer} buffer 
* @param {Number} offset 
* @param {Number} length 
* @param {Number} position 
*/ 
node.fs.readSync = function (fd,buffer,offset,length,position) { } 

/** @description fs.realpath(path[, options], callback)
* @param {String | Buffer} path 
* @param {String | Object} options 
* @param {Function} callback 
*/ 
node.fs.realpath = function (path,options,callback) { } 

/** @description fs.realpathSync(path[, options])
* @param {String | Buffer} path 
* @param {String | Object} options 
*/ 
node.fs.realpathSync = function (path,options) { } 

/** @description fs.rename(oldPath, newPath, callback)
* @param {String | Buffer} oldPath 
* @param {String | Buffer} newPath 
* @param {Function} callback 
*/ 
node.fs.rename = function (oldPath,newPath,callback) { } 

/** @description fs.renameSync(oldPath, newPath)
* @param {String | Buffer} oldPath 
* @param {String | Buffer} newPath 
*/ 
node.fs.renameSync = function (oldPath,newPath) { } 

/** @description fs.rmdir(path, callback)
* @param {String | Buffer} path 
* @param {Function} callback 
*/ 
node.fs.rmdir = function (path,callback) { } 

/** @description fs.rmdirSync(path)
* @param {String | Buffer} path 
*/ 
node.fs.rmdirSync = function (path) { } 

/** @description fs.stat(path, callback)
* @param {String | Buffer} path 
* @param {Function} callback 
*/ 
node.fs.stat = function (path,callback) { } 

/** @description fs.statSync(path)
* @param {String | Buffer} path 
*/ 
node.fs.statSync = function (path) { } 

/** @description fs.symlink(target, path[, type], callback)
* @param {String | Buffer} target 
* @param {String | Buffer} path 
* @param {String} type 
* @param {Function} callback 
*/ 
node.fs.symlink = function (target,path,type,callback) { } 

/** @description fs.symlinkSync(target, path[, type])
* @param {String | Buffer} target 
* @param {String | Buffer} path 
* @param {String} type 
*/ 
node.fs.symlinkSync = function (target,path,type) { } 

/** @description fs.truncate(path, len, callback)
* @param {String | Buffer} path 
* @param {Number} len 
* @param {Function} callback 
*/ 
node.fs.truncate = function (path,len,callback) { } 

/** @description fs.truncateSync(path, len)
* @param {String | Buffer} path 
* @param {Number} len 
*/ 
node.fs.truncateSync = function (path,len) { } 

/** @description fs.unlink(path, callback)
* @param {String | Buffer} path 
* @param {Function} callback 
*/ 
node.fs.unlink = function (path,callback) { } 

/** @description fs.unlinkSync(path)
* @param {String | Buffer} path 
*/ 
node.fs.unlinkSync = function (path) { } 

/** @description fs.unwatchFile(filename[, listener])
* @param {String | Buffer} filename 
* @param {Function} listener 
*/ 
node.fs.unwatchFile = function (filename,listener) { } 

/** @description fs.utimes(path, atime, mtime, callback)
* @param {String | Buffer} path 
* @param {Number} atime 
* @param {Number} mtime 
* @param {Function} callback 
*/ 
node.fs.utimes = function (path,atime,mtime,callback) { } 

/** @description fs.utimesSync(path, atime, mtime)
* @param {String | Buffer} path 
* @param {Number} atime 
* @param {Number} mtime 
*/ 
node.fs.utimesSync = function (path,atime,mtime) { } 

/** @description fs.watch(filename[, options][, listener])
* @param {String | Buffer} filename 
* @param {String | Object} options 
* @param {Function} listener 
*/ 
node.fs.watch = function (filename,options,listener) { } 

/** @description fs.watchFile(filename[, options], listener)
* @param {String | Buffer} filename 
* @param {Object} options 
* @param {Function} listener 
*/ 
node.fs.watchFile = function (filename,options,listener) { } 

/** @description fs.write(fd, buffer, offset, length[, position], callback)
* @param {Number} fd 
* @param {String | Buffer} buffer 
* @param {Number} offset 
* @param {Number} length 
* @param {Number} position 
* @param {Function} callback 
*/ 
node.fs.write = function (fd,buffer,offset,length,position,callback) { } 

/** @description fs.write(fd, data[, position[, encoding]], callback)
* @param {Number} fd 
* @param {String | Buffer} data 
* @param {Number} position 
* @param {String} encoding 
* @param {Function} callback 
*/ 
node.fs.write = function (fd,data,position,encoding,callback) { } 

/** @description fs.writeFile(file, data[, options], callback)
* @param {String | Buffer | Integer} file 
* @param {String | Buffer} data 
* @param {Object | String} options 
* @param {Function} callback 
*/ 
node.fs.writeFile = function (file,data,options,callback) { } 

/** @description fs.writeFileSync(file, data[, options])
* @param {String | Buffer | Integer} file 
* @param {String | Buffer} data 
* @param {Object | String} options 
*/ 
node.fs.writeFileSync = function (file,data,options) { } 

/** @description fs.writeSync(fd, buffer, offset, length[, position])
* @param {Number} fd 
* @param {String | Buffer} buffer 
* @param {Number} offset 
* @param {Number} length 
* @param {Number} position 
*/ 
node.fs.writeSync = function (fd,buffer,offset,length,position) { } 

/** @description fs.writeSync(fd, data[, position[, encoding]])
* @param {Number} fd 
* @param {String | Buffer} data 
* @param {Number} position 
* @param {String} encoding 
*/ 
node.fs.writeSync = function (fd,data,position,encoding) { } 




node.http={
	/// <field type='Array'>A list of the HTTP methods that are supported by the parser.</field>
	METHODS:{ _Array :true },
	/// <field type='Object'>A collection of all the standard HTTP response status codes, and the short description of each</field>
	STATUS_CODES:{_Object :true},
	/// <field type='Object'>Global instance of Agent which is used as the default for all http client requests.</field>
	globalAgent:{_Object :true}
}

var http = function(){};

/** @description Class: http.Agent
* @param {Object} options 
*/ 
node.http.Agent = function (options) { } 
node.http.Agent["_Class"] = true;
http.Agent = node.http.Agent;
/** @description agent.createConnection(options[, callback])
* @param {any} options 
* @param {any} callback 
*/ 
node.http.Agent.prototype.createConnection = function (options,callback) { } 

/** @description agent.destroy()
*/ 
node.http.Agent.prototype.destroy = function () { } 

/** @description agent.getName(options)
* @param {any} options 
*/ 
node.httpAgent.prototype.getName = function (options) { } 

node.httpAgent.freeSockets={  }
node.httpAgent.maxFreeSockets={ }
node.httpAgent.maxSockets={ }
node.httpAgent.requests={  }
node.httpAgent.sockets={ }



/** @description Class: http.ClientRequest
*/ 
node.http.ClientRequest = function () { } 
node.http.ClientRequest["_Class"] = true;
http.ClientRequest = node.http.ClientRequest;

/** @description request.abort()
*/ 
node.http.ClientRequest.prototype.abort = function () { } 

/** @description request.end([data][, encoding][, callback])
* @param {any} data 
* @param {any} encoding 
* @param {any} callback 
*/ 
node.http.ClientRequest.prototype.end = function (data,encoding,callback) { } 

/** @description request.flushHeaders()
*/ 
node.http.ClientRequest.prototype.flushHeaders = function () { } 

/** @description request.setNoDelay([noDelay])
* @param {any} noDelay 
*/ 
node.http.ClientRequest.prototype.setNoDelay = function (noDelay) { } 

/** @description request.setSocketKeepAlive([enable][, initialDelay])
* @param {any} enable 
* @param {any} initialDelay 
*/ 
node.http.ClientRequest.prototype.setSocketKeepAlive = function (enable,initialDelay) { } 

/** @description request.setTimeout(timeout[, callback])
* @param {any} timeout 
* @param {any} callback 
*/ 
node.http.ClientRequest.prototype.setTimeout = function (timeout,callback) { } 

/** @description request.write(chunk[, encoding][, callback])
* @param {any} chunk 
* @param {any} encoding 
* @param {any} callback 
*/ 
node.http.ClientRequest.prototype.write = function (chunk,encoding,callback) { } 

node.http.Server.listening={  }
node.http.Server.maxHeadersCount={  }
node.http.Server.timeout={  }

/** @description Class: http.Server
*/ 
node.http.Server = function () {
	this.listening={  }
	this.maxHeadersCount={  }
	this.timeout={  }
} 
node.http.Server["_Class"] = true;
http.Server = node.http.Server;
/** @description server.close([callback])
* @param {any} callback 
*/ 
node.http.Server.prototype.close = function (callback) { } 

/** @description server.listen(handle[, callback])
* @param {Object} handle 
* @param {Function} callback 
*/ 
node.http.Server.prototype.listen = function (handle,callback) { } 

/** @description server.listen(path[, callback])
* @param {any} path 
* @param {any} callback 
*/ 
node.http.Server.prototype.listen = function (path,callback) { } 

/** @description server.listen([port][, hostname][, backlog][, callback])
* @param {any} port 
* @param {any} hostname 
* @param {any} backlog 
* @param {any} callback 
*/ 
node.http.Server.prototype.listen = function (port,hostname,backlog,callback) { } 

/** @description server.setTimeout(msecs, callback)
* @param {Number} msecs 
* @param {Function} callback 
*/ 
node.http.Server.prototype.setTimeout = function (msecs,callback) { } 




/** @description Class: http.ServerResponse
*/ 
node.http.ServerResponse = function () {
	this.finished={ }
	this.headersSent={ }
	this.sendDate={ }
	this.statusCode={ }
	this.statusMessage={ }
} 
node.http.ServerResponse["_Class"] = true;
http.ServerResponse = node.http.ServerResponse;

/** @description response.addTrailers(headers)
* @param {any} headers 
*/ 
node.http.ServerResponse.prototype.addTrailers = function (headers) { } 

/** @description response.end([data][, encoding][, callback])
* @param {any} data 
* @param {any} encoding 
* @param {any} callback 
*/ 
node.http.ServerResponse.prototype.end = function (data,encoding,callback) { } 

/** @description response.getHeader(name)
* @param {any} name 
*/ 
node.http.ServerResponse.prototype.getHeader = function (name) { } 

/** @description response.removeHeader(name)
* @param {any} name 
*/ 
node.http.ServerResponse.prototype.removeHeader = function (name) { } 

/** @description response.setHeader(name, value)
* @param {any} name 
* @param {any} value 
*/ 
node.http.ServerResponse.prototype.setHeader = function (name,value) { } 

/** @description response.setTimeout(msecs, callback)
* @param {Number} msecs 
* @param {Function} callback 
*/ 
node.http.ServerResponse.prototype.setTimeout = function (msecs,callback) { } 

/** @description response.write(chunk[, encoding][, callback])
* @param {any} chunk 
* @param {any} encoding 
* @param {any} callback 
*/ 
node.http.ServerResponse.prototype.write = function (chunk,encoding,callback) { } 

/** @description response.writeContinue()
*/ 
node.http.ServerResponse.prototype.writeContinue = function () { } 

/** @description response.writeHead(statusCode[, statusMessage][, headers])
* @param {any} statusCode 
* @param {any} statusMessage 
* @param {any} headers 
*/ 
node.http.ServerResponse.prototype.writeHead = function (statusCode,statusMessage,headers) { } 








/** @description Class: http.IncomingMessage
*/ 
node.http.IncomingMessage = function () {
	this.headers={ _undefined :true }
	this.httpVersion={ _undefined :true }
	this.method={ _undefined :true }
	this.rawHeaders={ _undefined :true }
	this.rawTrailers={ _undefined :true }
	this.statusCode={ _undefined :true }
	this.statusMessage={ _undefined :true }
	this.socket={ _undefined :true }
	this.trailers={ _undefined :true }
	this.url={ _undefined :true }
} 
node.http.IncomingMessage["_Class"] = true;
http.IncomingMessage = node.http.IncomingMessage;

/** @description message.destroy([error])
* @param {Error} error 
*/ 
node.http.IncomingMessage.prototype.destroy = function (error) { } 

/** @description message.setTimeout(msecs, callback)
* @param {Number} msecs 
* @param {Function} callback 
*/ 
node.http.IncomingMessage.prototype.setTimeout = function (msecs,callback) { } 








/** @description http.createClient([port][, host])
* @param {any} port 
* @param {any} host 
*/ 
node.http.createClient = function (port,host) { } 

/** @description http.createServer([requestListener])
* @param {any} requestListener 
* @return {http.Server} 
*/ 
node.http.createServer = function (requestListener) { } 

/** @description http.get(options[, callback])
* @param {any} options 
* @param {any} callback 
*/ 
node.http.get = function (options,callback) { } 

/** @description http.request(options[, callback])
* @param {any} options 
* @param {any} callback 
*/ 
node.http.request = function (options,callback) { } 






node.https={
	globalAgent:{}
}

var https = function(){};

/** @description Class: https.Agent
*/ 
node.https.Agent = function () { } 
node.https.Agent["_Class"] = true;
https.Agent = node.https.Agent;


/** @description Class: https.Server
*/ 
node.https.Server = function () { } 
node.https.Server["_Class"] = true;
https.Server = node.https;

/** @description server.setTimeout(msecs, callback)
* @param {any} msecs 
* @param {any} callback 
*/ 
node.https.Server.prototype.setTimeout = function (msecs,callback) { } 
node.https.Server.timeout={ _undefined :true }


/** @description https.createServer(options[, requestListener])
* @param {any} options 
* @param {any} requestListener 
*/ 
node.https.createServer = function (options,requestListener) { } 

/** @description https.get(options, callback)
* @param {any} options 
* @param {any} callback 
*/ 
node.https.get = function (options,callback) { } 

/** @description https.request(options, callback)
* @param {any} options 
* @param {any} callback 
*/ 
node.https.request = function (options,callback) { } 






node.net={}
var net = function(){};

/** @description Class: net.Server
*/ 
node.net.Server = function () {
	this.connections={  }
	this.listening={   }
	this.maxConnections={  }
} 
node.net.Server["_Class"] = true;
net.Server = node.net.Server;

/** @description server.address()
*/ 
node.net.Server.prototype.address = function () { } 

/** @description server.close([callback])
* @param {any} callback 
*/ 
node.net.Server.prototype.close = function (callback) { } 

/** @description server.getConnections(callback)
* @param {any} callback 
*/ 
node.net.Server.prototype.getConnections = function (callback) { } 

/** @description server.listen(handle[, backlog][, callback])
* @param {Object} handle 
* @param {Number} backlog 
* @param {Function} callback 
*/ 
node.net.Server.prototype.listen = function (handle,backlog,callback) { } 

/** @description server.listen(options[, callback])
* @param {Object} options 
* @param {Function} callback 
*/ 
node.net.Server.prototype.listen = function (options,callback) { } 

/** @description server.listen(path[, backlog][, callback])
* @param {String} path 
* @param {Number} backlog 
* @param {Function} callback 
*/ 
node.net.Server.prototype.listen = function (path,backlog,callback) { } 

/** @description server.listen([port][, hostname][, backlog][, callback])
* @param {any} port 
* @param {any} hostname 
* @param {any} backlog 
* @param {any} callback 
*/ 
node.net.Server.prototype.listen = function (port,hostname,backlog,callback) { } 

/** @description server.ref()
*/ 
node.net.Server.prototype.ref = function () { } 

/** @description server.unref()
*/ 
node.net.Server.prototype.unref = function () { } 




/** @description Class: net.Socket
*/ 
node.net.Socket = function () {
	this.bufferSize={ _undefined :true }
	this.bytesRead={ _undefined :true }
	this.bytesWritten={ _undefined :true }
	this.connecting={ _undefined :true }
	this.destroyed={ _undefined :true }
	this.localAddress={ _undefined :true }
	this.localPort={ _undefined :true }
	this.remoteAddress={ _undefined :true }
	this.remoteFamily={ _undefined :true }
	this.remotePort={ _undefined :true }
} 
node.net.Socket["_Class"] = true;
net.Socket = node.net.Socket;

/** @description new net.Socket([options])
* @param {any} options 
*/ 
node.net.Socket.prototype.Socket = function (options) { } 

/** @description socket.address()
*/ 
node.net.Socket.prototype.address = function () { } 

/** @description socket.connect(options[, connectListener])
* @param {any} options 
* @param {any} connectListener 
*/ 
node.net.Socket.prototype.connect = function (options,connectListener) { } 

/** @description socket.connect(path[, connectListener])
* @param {any} port 
* @param {any} host 
* @param {any} connectListener 
*/ 
node.net.Socket.prototype.connect = function (port,host,connectListener) { } 

/** @description socket.connect(port[, host][, connectListener])
* @param {any} port 
* @param {any} host 
* @param {any} connectListener 
*/ 
node.net.Socket.prototype.connect = function (port,host,connectListener) { } 

/** @description socket.destroy([exception])
* @param {any} exception 
*/ 
node.net.Socket.prototype.destroy = function (exception) { } 

/** @description socket.end([data][, encoding])
* @param {any} data 
* @param {any} encoding 
*/ 
node.net.Socket.prototype.end = function (data,encoding) { } 

/** @description socket.pause()
*/ 
node.net.Socket.prototype.pause = function () { } 

/** @description socket.ref()
*/ 
node.net.Socket.prototype.ref = function () { } 

/** @description socket.resume()
*/ 
node.net.Socket.prototype.resume = function () { } 

/** @description socket.setEncoding([encoding])
* @param {any} encoding 
*/ 
node.net.Socket.prototype.setEncoding = function (encoding) { } 

/** @description socket.setKeepAlive([enable][, initialDelay])
* @param {any} enable 
* @param {any} initialDelay 
*/ 
node.net.Socket.prototype.setKeepAlive = function (enable,initialDelay) { } 

/** @description socket.setNoDelay([noDelay])
* @param {any} noDelay 
*/ 
node.net.Socket.prototype.setNoDelay = function (noDelay) { } 

/** @description socket.setTimeout(timeout[, callback])
* @param {any} timeout 
* @param {any} callback 
*/ 
node.net.Socket.prototype.setTimeout = function (timeout,callback) { } 

/** @description socket.unref()
*/ 
node.net.Socket.prototype.unref = function () { } 

/** @description socket.write(data[, encoding][, callback])
* @param {any} data 
* @param {any} encoding 
* @param {any} callback 
*/ 
node.net.Socket.prototype.write = function (data,encoding,callback) { } 



/** @description net.connect(options[, connectListener])
* @param {any} options 
* @param {any} connectListener 
*/ 
node.net.connect = function (options,connectListener) { } 

/** @description net.connect(path[, connectListener])
* @param {any} path 
* @param {any} connectListener 
*/ 
node.net.connect = function (path,connectListener) { } 

/** @description net.connect(port[, host][, connectListener])
* @param {any} port 
* @param {any} host 
* @param {any} connectListener 
*/ 
node.net.connect = function (port,host,connectListener) { } 

/** @description net.createConnection(options[, connectListener])
* @param {any} options 
* @param {any} connectListener 
*/ 
node.net.createConnection = function (options,connectListener) { } 

/** @description net.createConnection(path[, connectListener])
* @param {any} path 
* @param {any} connectListener 
*/ 
node.net.createConnection = function (path,connectListener) { } 

/** @description net.createConnection(port[, host][, connectListener])
* @param {any} port 
* @param {any} host 
* @param {any} connectListener 
*/ 
node.net.createConnection = function (port,host,connectListener) { } 

/** @description net.createServer([options][, connectionListener])
* @param {any} options 
* @param {any} connectionListener 
*/ 
node.net.createServer = function (options,connectionListener) { } 

/** @description net.isIP(input)
* @param {any} input 
*/ 
node.net.isIP = function (input) { } 

/** @description net.isIPv4(input)
* @param {any} input 
*/ 
node.net.isIPv4 = function (input) { } 

/** @description net.isIPv6(input)
* @param {any} input 
*/ 
node.net.isIPv6 = function (input) { } 




node.os={}
 
/** @description  returns a string identifying the operating system CPU architecture for which the Node.js binary was compiled.  The current possible values are: 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', 'x64', and 'x86'.
*/ 
node.os.arch = function () { } 

/** @description returns an array of objects containing information about each CPU/core installed.
*/ 
node.os.cpus = function () { } 

/** @description  returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.
*/ 
node.os.endianness = function () { } 

/** @description eturns the amount of free system memory in bytes as an integer.
*/ 
node.os.freemem = function () { } 

/** @description returns the home directory of the current user as a string.
*/ 
node.os.homedir = function () { } 

/** @description returns the hostname of the operating system as a string.
*/ 
node.os.hostname = function () { } 

/** @description returns an array containing the 1, 5, and 15 minute load averages.
*/ 
node.os.loadavg = function () { } 

/** @description returns an object containing only network interfaces that have been assigned a network address.
*/ 
node.os.networkInterfaces = function () { } 

/** @description returns a string identifying the operating system platform as set during compile time of Node.js.  'aix''darwin' 'freebsd''linux''openbsd''sunos''win32'
*/ 
node.os.platform = function () { } 

/** @description returns a string identifying the operating system release.
*/ 
node.os.release = function () { } 

/** @description returns a string specifying the operating system's default directory for temporary files.
*/ 
node.os.tmpdir = function () { } 

/** @description returns the total amount of system memory in bytes as an integer.
*/ 
node.os.totalmem = function () { } 

/** @description returns a string identifying the operating system name as returned by uname(3). For example 'Linux' on Linux, 'Darwin' on OS X and 'Windows_NT' on Windows.  Please see https://en.wikipedia.org/wiki/Uname#Examples for additional information about the output of running uname(3) on various operating systems.
*/ 
node.os.type = function () { } 

/** @description  returns the system uptime in number of seconds.
*/ 
node.os.uptime = function () { } 

/** @description object includes the username, uid, gid, shell, and homedir. On Windows, the uid and gid fields are -1, and shell is null.
* @param {Object} options 
*/ 
node.os.userInfo = function (options) { } 





node.path={
	 delimiter:{ _undefined :true },


 posix:{ _undefined :true },


 sep:{ _undefined :true },


 win32:{ _undefined :true }
}

 

 


/** @description path.basename(path[, ext])
* @param {String} path 
* @param {String} ext 
*/ 
node.path.basename = function (path,ext) { } 

/** @description path.dirname(path)
* @param {String} path 
*/ 
node.path.dirname = function (path) { } 

/** @description path.extname(path)
* @param {String} path 
*/ 
node.path.extname = function (path) { } 

/** @description path.format(pathObject)
* @param {Object} pathObject 
*/ 
node.path.format = function (pathObject) { } 

/** @description path.isAbsolute(path)
* @param {String} path 
*/ 
node.path.isAbsolute = function (path) { } 

/** @description path.join([path[, ...]])
* @param {any} [path[, 
* @param {any} ... 
*/ 
node.path.join = function ([path[,,...) { } 

/** @description path.normalize(path)
* @param {String} path 
*/ 
node.path.normalize = function (path) { } 

/** @description path.parse(path)
* @param {String} path 
*/ 
node.path.parse = function (path) { } 

/** @description path.relative(from, to)
* @param {String} from 
* @param {String} to 
*/ 
node.path.relative = function (from,to) { } 

/** @description path.resolve([path[, ...]])
* @param {any} [path[, 
* @param {any} ... 
*/ 
node.path.resolve = function ([path[,,...) { } 





node.querystring={}

/** @description querystring.escape(str)
* @param {String} str 
*/ 
node.querystring.escape = function (str) { } 

/** @description querystring.parse(str[, sep[, eq[, options]]])
* @param {String} str 
* @param {String} sep 
* @param {String} eq 
* @param {Object} options 
*/ 
node.querystring.parse = function (str,sep,eq,options) { } 

/** @description querystring.stringify(obj[, sep[, eq[, options]]])
* @param {Object} obj 
* @param {String} sep 
* @param {String} eq 
* @param {any} options 
*/ 
node.querystring.stringify = function (obj,sep,eq,options) { } 

/** @description querystring.unescape(str)
* @param {String} str 
*/ 
node.querystring.unescape = function (str) { } 



node.readline={}

var readline = function(){};

/** @description Class: Interface
*/ 
node.readline.Interface = function () { } 
node.readline.Interface["_Class"] = true;
readline.Interface = node.readline.Interface;


/** @description rl.close()
*/ 
node.readline.Interface.prototype.close = function () { } 

/** @description rl.pause()
*/ 
node.readline.Interface.prototype.pause = function () { } 

/** @description rl.prompt([preserveCursor])
* @param {boolean} preserveCursor 
*/ 
node.readline.Interface.prototype.prompt = function (preserveCursor) { } 

/** @description rl.question(query, callback)
* @param {String} query 
* @param {Function} callback 
*/ 
node.readline.Interface.prototype.question = function (query,callback) { } 

/** @description rl.resume()
*/ 
node.readline.Interface.prototype.resume = function () { } 

/** @description rl.setPrompt(prompt)
* @param {String} prompt 
*/ 
node.readline.Interface.prototype.setPrompt = function (prompt) { } 

/** @description rl.write(data[, key])
* @param {String} data 
* @param {Object} key 
*/ 
node.readline.Interface.prototype.write = function (data,key) { } 


/** @description readline.clearLine(stream, dir)
* @param {Writable} stream 
* @param {number} dir 
*/ 
node.readline.clearLine = function (stream,dir) { } 

/** @description readline.clearScreenDown(stream)
* @param {Writable} stream 
*/ 
node.readline.clearScreenDown = function (stream) { } 

/** @description readline.createInterface(options)
* @param {Object} options 
* @return {readline.Interface} 
*/ 
node.readline.createInterface = function (options) { } 

/** @description readline.cursorTo(stream, x, y)
* @param {Writable} stream 
* @param {number} x 
* @param {number} y 
*/ 
node.readline.cursorTo = function (stream,x,y) { } 

/** @description readline.emitKeypressEvents(stream[, interface])
* @param {Readable} stream 
* @param {readline.Interface} interface 
*/ 
node.readline.emitKeypressEvents = function (stream,interface) { } 

/** @description readline.moveCursor(stream, dx, dy)
* @param {Writable} stream 
* @param {number} dx 
* @param {Number} dy 
*/ 
node.readline.moveCursor = function (stream,dx,dy) { } 





node.repl={}

var repl = function(){};

/** @description Class: REPLServer
*/ 
node.repl.REPLServer = function () { } 
node.repl.REPLServer["_Class"] = true;
repl.REPLServer = node.repl.REPLServer;

/** @description replServer.defineCommand(keyword, cmd)
* @param {String} keyword 
* @param {Object|Function} cmd 
*/ 
node.repl.REPLServer.prototype.defineCommand = function (keyword,cmd) { } 

/** @description replServer.displayPrompt([preserveCursor])
* @param {Boolean} preserveCursor 
*/ 
node.repl.REPLServer.prototype.displayPrompt = function (preserveCursor) { } 


/** @description repl.start([options])
* @param {Object} options 
*/ 
node.repl.start = function (options) { } 



node.stream={}


node.tls={}

 
/** @description Class: CryptoStream
*/ 
node.tls.deprecated_apis.CryptoStream.CryptoStream = function () { } 
node.tls.deprecated_apis.CryptoStream.bytesWritten={ _undefined :true }



/** @description Class: SecurePair
*/ 
node.tls.deprecated_apis.SecurePair.SecurePair = function () { } 




/** @description Class: tls.Server
*/ 
node.tls.Server = function () { } 
node.tls.Server["_Class"] = true;
tls.Server = node.tls.Server;

/** @description server.addContext(hostname, context)
* @param {string} hostname 
* @param {Object} context 
*/ 
node.tls.Server.prototype.addContext = function (hostname,context) { } 

/** @description server.address()
*/ 
node.tls.Server.prototype.address = function () { } 

/** @description server.close([callback])
* @param {Function} callback 
*/ 
node.tls.Server.prototype.close = function (callback) { } 

/** @description server.getTicketKeys()
*/ 
node.tls.Server.prototype.getTicketKeys = function () { } 

/** @description server.listen(port[, hostname][, callback])
* @param {number} port 
* @param {string} hostname 
* @param {Function} callback 
*/ 
node.tls.Server.prototype.listen = function (port,hostname,callback) { } 

/** @description server.setTicketKeys(keys)
* @param {Buffer} keys 
*/ 
node.tls.Server.prototype.setTicketKeys = function (keys) { } 
node.tls.Server.connections={ _undefined :true }



/** @description Class: tlsSocket
*/ 
node.tls.TLSSocket = function () {
	this.authorized={ _undefined :true }
	this.authorizationError={ _undefined :true }
	this.encrypted={ _undefined :true }
	this.localAddress={ _undefined :true }
	this.localPort={ _undefined :true }
	this.remoteAddress={ _undefined :true }
	this.remoteFamily={ _undefined :true }
	this.remotePort={ _undefined :true }
 } 
node.tls.TLSSocket["_Class"] = true;
tls.TLSSocket = node.tls.TLSSocket;


 

/** @description tlsSocket.address()
*/ 
node.tls.TLSSocket.prototype.address = function () { } 

/** @description tlsSocket.getCipher()
*/ 
node.tls.TLSSocket.prototype.getCipher = function () { } 

/** @description tlsSocket.getEphemeralKeyInfo()
*/ 
node.tls.TLSSocket.prototype.getEphemeralKeyInfo = function () { } 

/** @description tlsSocket.getPeerCertificate([ detailed ])
* @param {boolean} detailed 
*/ 
node.tls.TLSSocket.prototype.getPeerCertificate = function (detailed) { } 

/** @description tlsSocket.getProtocol()
*/ 
node.tls.TLSSocket.prototype.getProtocol = function () { } 

/** @description tlsSocket.getSession()
*/ 
node.tls.TLSSocket.prototype.getSession = function () { } 

/** @description tlsSocket.getTLSTicket()
*/ 
node.tls.TLSSocket.prototype.getTLSTicket = function () { } 

/** @description tlsSocket.renegotiate(options, callback)
* @param {Object} options 
* @param {Function} callback 
*/ 
node.tls.TLSSocket.prototype.renegotiate = function (options,callback) { } 

/** @description tlsSocket.setMaxSendFragment(size)
* @param {number} size 
*/ 
node.tls.TLSSocket.prototype.setMaxSendFragment = function (size) { } 



/** @description tls.connect(options[, callback])
* @param {Object} options 
* @param {Function} callback 
*/ 
node.tls.connect = function (options,callback) { } 

/** @description tls.connect(port[, host][, options][, callback])
* @param {number} port 
* @param {string} host 
* @param {Object} options 
* @param {Function} callback 
*/ 
node.tls.connect = function (port,host,options,callback) { } 

/** @description tls.createSecureContext(options)
* @param {Object} options 
*/ 
node.tls.createSecureContext = function (options) { } 

/** @description tls.createServer(options[, secureConnectionListener])
* @param {Object} options 
* @param {Function} secureConnectionListener 
*/ 
node.tls.createServer = function (options,secureConnectionListener) { } 

/** @description tls.getCiphers()
*/ 
node.tls.getCiphers = function () { } 

/** @description tls.createSecurePair([context][, isServer][, requestCert][, rejectUnauthorized][, options])
* @param {Object} context 
* @param {boolean} isServer 
* @param {boolean} requestCert 
* @param {boolean} rejectUnauthorized 
* @param {any} options 
*/ 
node.tls.createSecurePair = function (context,isServer,requestCert,rejectUnauthorized,options) { } 



node.tty={}

var tty = function(){};
/** @description Class: tty.ReadStream
*/ 
node.tty.ReadStream = function () {
	this.isRaw = { _undefined :true }
} 
node.tty.ReadStream["_Class"] = true;
tty.ReadStream = node.tty.ReadStream;

/** @description readStream.setRawMode(mode)
* @param {boolean} mode 
*/ 
node.tty.ReadStream.prototype.setRawMode = function (mode) { } 



/** @description Class: tty.WriteStream
*/ 
node.tty.WriteStream = function () {
	this.columns={ _undefined :true }
	this.rows={ _undefined :true }
} 
node.tty.WriteStream["_Class"] = true;
tty.WriteStream = node.tty.WriteStream;


/** @description returns true if the given fd is associated with a TTY and false if is not.
* @param {number} fd 
*/ 
node.tty.isatty = function (fd) { } 



node.url={}

var url = function(){};
/** @description Class: url
*/ 
node.url.Url = function () {
	this.href={ _undefined :true }
	this.protocol={ _undefined :true }
	this.slashes={ _undefined :true }
	this.host={ _undefined :true }
	this.auth={ _undefined :true }
	this.hostname={ _undefined :true }
	this.port={ _undefined :true }
	this.pathname={ _undefined :true }
	this.search={ _undefined :true }
	this.path={ _undefined :true }
	this.query={ _undefined :true }
	this.hash={ _undefined :true }
} 
node.url.Url["_Class"] = true;
url.Url = node.url.Url;


/** @description url.format(urlObject)
* @param {Object | String} urlObject 
*/ 
node.url.format = function (urlObject) { } 

/** @description url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
* @param {string} urlString 
* @param {boolean} parseQueryString 
* @param {boolean} slashesDenoteHost 
* @return {url.Url} 
*/ 
node.url.parse = function (urlString,parseQueryString,slashesDenoteHost) { } 

/** @description url.resolve(from, to)
* @param {string} from 
* @param {string} to 
*/ 
node.url.resolve = function (from,to) { } 





node.v8={}

/** @description v8.getHeapStatistics()
*/ 
node.v8.getHeapStatistics = function () { } 

/** @description v8.getHeapSpaceStatistics()
*/ 
node.v8.getHeapSpaceStatistics = function () { } 

/** @description v8.setFlagsFromString(string)
* @param {any} string 
*/ 
node.v8.setFlagsFromString = function (string) { } 




node.vm={}
var vm =function(){};

/** @description Class: vm.Script
*/ 
node.vm.Script = function () { } 
node.vm.Script["_Class"] = true;
vm.Script = node.vm.Script;

/** @description new vm.Script(code, options)
* @param {string} code 
* @param {any} options 
*/ 
node.vm.Script.prototype.Script = function (code,options) { } 

/** @description script.runInContext(contextifiedSandbox[, options])
* @param {Object} contextifiedSandbox 
* @param {Object} options 
*/ 
node.vm.Script.prototype.runInContext = function (contextifiedSandbox,options) { } 

/** @description script.runInNewContext([sandbox][, options])
* @param {Object} sandbox 
* @param {Object} options 
*/ 
node.vm.Script.prototype.runInNewContext = function (sandbox,options) { } 

/** @description script.runInThisContext([options])
* @param {Object} options 
*/ 
node.vm.Script.prototype.runInThisContext = function (options) { } 


/** @description vm.createContext([sandbox])
* @param {Object} sandbox 
*/ 
node.vm.createContext = function (sandbox) { } 

/** @description vm.isContext(sandbox)
* @param {Object} sandbox 
*/ 
node.vm.isContext = function (sandbox) { } 

/** @description vm.runInContext(code, contextifiedSandbox[, options])
* @param {string} code 
* @param {Object} contextifiedSandbox 
* @param {any} options 
*/ 
node.vm.runInContext = function (code,contextifiedSandbox,options) { } 

/** @description vm.runInDebugContext(code)
* @param {string} code 
*/ 
node.vm.runInDebugContext = function (code) { } 

/** @description vm.runInNewContext(code[, sandbox][, options])
* @param {string} code 
* @param {Object} sandbox 
* @param {any} options 
*/ 
node.vm.runInNewContext = function (code,sandbox,options) { } 

/** @description vm.runInThisContext(code[, options])
* @param {string} code 
* @param {any} options 
*/ 
node.vm.runInThisContext = function (code,options) { } 




node.zlib={}

 var zlib = function(){};


/** @description Class: zlib.Deflate
*/ 
node.zlib.Deflate = function () { } 
node.zlib.Deflate["_Class"] = true;
zlib.Deflate = node.zlib.Deflate;


/** @description Class: zlib.DeflateRaw
*/ 
node.zlib.DeflateRaw = function () { } 
node.zlib.DeflateRaw["_Class"] = true;
zlib.DeflateRaw = node.zlib.DeflateRaw;


/** @description Class: zlib.Gunzip
*/ 
node.zlib.Gunzip = function () { } 
node.zlib.Gunzip["_Class"] = true;
zlib.Gunzip = node.zlib.Gunzip;


/** @description Class: zlib.Gzip
*/ 
node.zlib.Gzip = function () { } 
node.zlib.Gzip["_Class"] = true;
zlib.Gzip = node.zlib.Gzip;


/** @description Class: zlib.Inflate
*/ 
node.zlib.Inflate = function () { } 
node.zlib.Inflate["_Class"] = true;
zlib.Inflate = node.zlib.Inflate;


/** @description Class: zlib.InflateRaw
*/ 
node.zlib.InflateRaw = function () { } 
node.zlib.InflateRaw["_Class"] = true;
zlib.InflateRaw = node.zlib.InflateRaw;


/** @description Class: zlib.Unzip
*/ 
node.zlib.Unzip = function () { } 
node.zlib.Unzip["_Class"] = true;
zlib.Unzip = node.zlib.Unzip;


/** @description Class: zlib
*/ 
node.zlib.Zlib = function () { } 
node.zlib.Zlib["_Class"] = true;
zlib.Zlib = node.zlib.Zlib;


/** @description zlib.flush([kind], callback)
* @param {any} kind 
* @param {any} callback 
*/ 
node.zlib.Zlib.prototype.flush = function (kind,callback) { } 

/** @description zlib.params(level, strategy, callback)
* @param {any} level 
* @param {any} strategy 
* @param {any} callback 
*/ 
node.zlib.Zlib.prototype.params = function (level,strategy,callback) { } 

/** @description zlib.reset()
*/ 
node.zlib.Zlib.prototype.reset = function () { } 


/** @description zlib.createDeflate([options])
* @param {any} options 
*/ 
node.zlib.createDeflate = function (options) { } 

/** @description zlib.createDeflateRaw([options])
* @param {any} options 
*/ 
node.zlib.createDeflateRaw = function (options) { } 

/** @description zlib.createGunzip([options])
* @param {any} options 
*/ 
node.zlib.createGunzip = function (options) { } 

/** @description zlib.createGzip([options])
* @param {any} options 
*/ 
node.zlib.createGzip = function (options) { } 

/** @description zlib.createInflate([options])
* @param {any} options 
*/ 
node.zlib.createInflate = function (options) { } 

/** @description zlib.createInflateRaw([options])
* @param {any} options 
*/ 
node.zlib.createInflateRaw = function (options) { } 

/** @description zlib.createUnzip([options])
* @param {any} options 
*/ 
node.zlib.createUnzip = function (options) { } 


})()