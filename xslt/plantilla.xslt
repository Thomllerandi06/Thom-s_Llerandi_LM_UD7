<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" indent="yes" />
    <xsl:strip-space elements="*" />

    <xsl:template match="/">

        <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt;</xsl:text>

        <html lang="en">

            <head>

                <meta charset="UTF-8" />

                <meta name="viewport"
                    content="width=device-width, initial-scale=1.0" />

                <title>Resident Evil Timeline</title>

                <link rel="stylesheet" href="style.css" />

            </head>

            <body>

                <h1>Resident Evil Chronology</h1>

                <xsl:for-each select="the_connections/timeline/game">

                    <div class="game">

                        <h2>
                            <xsl:value-of select="title" />
                        </h2>

                        <p>
                            <b>Year:</b>
                            <xsl:value-of select="@year" />
                        </p>

                        <p>
                            <b>Developer:</b>
                            <xsl:value-of select="developer" />
                        </p>

                        <p>
                            <b>Main Incident:</b>
                            <xsl:value-of select="main_incident" />
                        </p>

                        <p>
                            <b>Location:</b>
                            <xsl:value-of select="location" />
                        </p>

                    </div>

                </xsl:for-each>

            </body>

        </html>

    </xsl:template>

</xsl:stylesheet>