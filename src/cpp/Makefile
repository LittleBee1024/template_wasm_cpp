CC     = em++
CFLAGS = -g
LFLAGS = --no-entry -g -s "EXPORTED_FUNCTIONS=['_malloc', '_free']"

TARGET = web_api
SRC    = $(wildcard *.cpp)
OBJ    = $(SRC:.cpp=.o)

all: $(TARGET)

$(TARGET): $(OBJ)
	$(CC) $(LFLAGS) $^ -o $@.js

%.o: %.cpp
	$(CC) -c $(CFLAGS) $< -o $@

clean:
	rm -f *.o *.wasm $(TARGET).js
