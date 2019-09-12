

$(document).ready(function() {

    //program generates a random number between 19 and 120
    var randNumber = Math.floor(Math.random() * ((19 - 120) + 1) + 120);
    $('#randNum').html(randNumber);

                                    //each crystal has a hidden value i.e. random number between1 and 12
                                    var crystal1 = Math.floor(Math.random() * 12) + 1;
                                    var crystal2 = Math.floor(Math.random() * 12) + 1;
                                    var crystal3 = Math.floor(Math.random() * 12) + 1;
                                    var crystal4 = Math.floor(Math.random() * 12) + 1;

                                    //variables to determine total score,win,loses
                                    var wins = 0; //#wins
                                    var losses = 0;  //#losses
                                    var totalScore = 0;

                                    $('#totalScore').text(totalScore);

                                    function win() {
                                        wins = wins + 1;
                                        $('#wins').text(wins);
                                        restart();
                                        reset();
                                    }

                                    function lose() {
                                        losses = losses + 1;
                                        $('#losses').text(losses);
                                        restart();
                                        reset();
                                    }
                                    //function created for four crystals
                                    $('#crystal1').click(function()  {
                                        totalScore = totalScore + crystal1
                                        $('#totalScore').text(totalScore);
                                        if (totalScore === randNumber) {
                                            win();
                                            reset();
                                            restart();
                                        } else if (totalScore > randNumber) {
                                            lose();
                                            reset();
                                            restart();
                                        }
                                    });

                                    $('#crystal2').click(function()  {
                                        totalScore = totalScore + crystal2;
                                        $('#totalScore').text(totalScore);
                                        if (totalScore === randNumber) {
                                            win();
                                            reset();
                                            restart();
                                        } else if (totalScore > randNumber) {
                                            lose();
                                            reset();
                                            restart();
                                        }
                                    });

                                    $('#crystal3').click(function()  {
                                        totalScore = totalScore + crystal3;
                                        $('#totalScore').text(totalScore);
                                        if (totalScore === randNumber) {
                                            win();
                                            reset();
                                            restart();
                                        } else if (totalScore > randNumber) {
                                            lose();
                                            reset();
                                            restart();
                                        }
                                    });

                                    $('#crystal4').click(function()  {
                                        totalScore = totalScore + crystal4;
                                        $('#totalScore').text(totalScore);
                                        if (totalScore === randNumber) {
                                            win();
                                            reset();
                                            restart();
                                        } else if (totalScore > randNumber) {
                                            lose();
                                            reset();
                                            restart();
                                        }
                                    });

                                    //random numbers (jewels) get added together: look above
                                    //script determines if player wins or loses and outcome recorded in winsLosses
                                    //game restart, page does NOT reload
                                    function reset() {
                                        totalScore = 0;
                                        $('#totalScore').text(totalScore);
                                    }

                                    function restart() {
                                        randNumber = Math.floor(Math.random() * ((19 - 120) + 1) + 120);
                                        $('#randNum').html(randNumber);
                                        crystal1 = Math.floor(Math.random() * 12) + 1;
                                        crystal2 = Math.floor(Math.random() * 12) + 1;
                                        crystal3 = Math.floor(Math.random() * 12) + 1;
                                        crystal4 = Math.floor(Math.random() * 12) + 1;
                                    }
                                });