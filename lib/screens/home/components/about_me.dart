import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mdaffailhami/widgets/socmed_icon_button.dart';

class MyAboutMe extends StatelessWidget {
  const MyAboutMe({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => componentKey;

  static const List<MySocmedIconButton> socmedIconButtons = [
    MySocmedIconButton(
      icon: FaIcon(FontAwesomeIcons.instagram),
      url: 'https://www.instagram.com/m.daffailhami/',
    ),
    MySocmedIconButton(
      icon: FaIcon(FontAwesomeIcons.github),
      url: 'https://github.com/mdaffailhami',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: const BorderRadius.only(
        bottomLeft: Radius.circular(10),
        bottomRight: Radius.circular(10),
      ),
      child: Material(
        color: Theme.of(context).colorScheme.surface,
        child: Padding(
          padding: EdgeInsets.symmetric(
            horizontal: MediaQuery.of(context).size.width * 0.06,
            vertical: 20,
          ),
          child: Center(
            child: SizedBox(
              width: 400,
              child: Column(
                children: [
                  RichText(
                    text: TextSpan(
                      style: Theme.of(context)
                          .textTheme
                          .subtitle2
                          ?.copyWith(fontSize: 15),
                      children: [
                        TextSpan(
                          text: "Hello! ",
                          style: TextStyle(
                            color: Theme.of(context).colorScheme.secondary,
                          ),
                        ),
                        TextSpan(
                          text: "I'm Daffa Ilhami.\n",
                        ),
                        TextSpan(
                          text:
                              "I'm a Programmer from Barabai, Indonesia.\nI started to learn Programming since 12 September 2020, and then yeah now it's become my hobby.",
                        ),
                      ],
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 20),
                  Wrap(
                    alignment: WrapAlignment.center,
                    spacing: 50,
                    runSpacing: 15,
                    children: socmedIconButtons,
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
