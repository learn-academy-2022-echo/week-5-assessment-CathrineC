# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def containLetter (array, letter)
    result = array.select {|item| item.include?(letter)}
end

p containLetter(beverages_array, letter_o)
p containLetter(beverages_array,letter_t)
p '-----contain_letter-----'
puts "\n"

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

def combined_array (array)
    array.values.flatten.sort
end

p combined_array(us_states)
p '-----combine_values-----'
puts "\n"

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model, current_speed)
        @model = model
        @wheels = 2
        @current_speed = current_speed
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
    def pedal_faster(number)
        @current_speed = @current_speed + number
    end 

    def brake(number)
        @current_speed = @current_speed - number
        if @current_speed >= 0
            @current_speed
        else
            0
        end
    end 
end

my_bike = Bike.new('Trek', 0).bike_info
p my_bike
p '-----initialize_bike-----'
puts "\n"

my_bike = Bike.new('Trek', 0)
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)
p '-----fasterORbrake-----'
puts "\n"


