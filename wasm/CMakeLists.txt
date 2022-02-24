set(TARGET web_api)
file(GLOB_RECURSE SRC_CPP ${CMAKE_CURRENT_LIST_DIR} "*.cpp")

add_executable(${TARGET} ${SRC_CPP})

# The option should not have any white space, use semicolon to split different options
separate_arguments(COMPILE_OPTION UNIX_COMMAND "-Wall")
separate_arguments(LINK_OPTION UNIX_COMMAND "--no-entry -s 'EXPORTED_FUNCTIONS=['_malloc', '_free']'")

set_target_properties(${TARGET} PROPERTIES
   COMPILE_OPTIONS "${COMPILE_OPTION}"
   LINK_OPTIONS "${LINK_OPTION}"
   RUNTIME_OUTPUT_DIRECTORY ${OUTUPT_DIR}/wasm
)
